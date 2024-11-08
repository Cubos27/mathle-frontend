import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import fetchData from "../../../logic/utils/fetch";

export default function useEditor() {
  const { id } = useParams<{ id: string }>();

  const [ title, setTitle ] = useState('');
  const [ type, setType ] = useState(1);
  const [ hasContent, setHasContent ] = useState(false);
  const [ imageCover, setImageCover ] = useState('');
  const [ totalScore, setTotalScore ] = useState(0);
  const [ description, setDescription ] = useState('');

  const [ parent, setParent ] = useState(0);
  const [ parentType, setParentType ] = useState(1);
  const [ previousArticle, setPreviousArticle ] = useState(0);

  const [ content, setContent ] = useState('');

  const [ isSaving, setIsSaving ] = useState(false);
  const [ saved, setSaved ] = useState(false);

  const handleHasContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHasContent(event.target.checked);
  }

  const handleTextChange = ( setValue : Function ) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value;
    const formattedText = handleAutoComplete( inputText );
    setValue( formattedText );
  }

  const handleAutoComplete = ( text: string ) => {
    text = text
    .replace(/"/g, "'")// replace double quotes with single quotes
    .replace(/\\/g, "/")// replace backslashes with forward slashes
    ;

    // Autocomplete the closing tag for p tag
    if (/<p>([^<]*)$/.test( text ))
      text = text.replace(/<p>([^<]*)$/, "<p>$1</p>");

    // Autocomplete the closing tag for pre tag
    if (/<pre>([^<]*)$/.test( text ))
      text = text.replace(/<pre>([^<]*)$/, "<pre>$1</pre>");

    // autocomplete the iframe tag
    if (/<iframe[^>]*$/.test(text)) {
      text = text.replace(/<iframe([^>]*)$/, `<iframe 
  src='' 
  title='' 
  frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>`);
    }

    // Autocomplete the img tag
    if (/<img[^>]*$/.test(text)) {
      text = text.replace(/<img([^>]*)$/, "<figure><img$1 src='' title='' alt='' /></figure>");
    }
    
    return text;
  }

  const handleInputChange = ( setValue : Function ) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue( event.target.value );
  }

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSaving(true);

    const data = {
      title,
      type,
      hasContent : type === 3 || hasContent,// if type is subtopic, then hasContent must be true, else use the value of hasContent
      imageCover,
      totalScore,
      description,
      parent : parent === 0 ? null : parent,
      parentType : parentType === 0 ? null : parentType,
      previousArticle : previousArticle === 0 ? null : previousArticle,
      content
    }

    const url = id ? `admin/editor/${id}` : 'admin/editor';
    const method = id ? 'PUT' : 'POST';
    const response = await fetchData( url , method, data );
    setIsSaving(false);
    setSaved( response?.status === 200 );
  }

  useEffect(() => {
    /*
     * if type is 2 (topic), then parentType must be 1
     * if type is 3 (subtopic), then parentType must be 2
    */
    setParentType( type - 1 );
  }, [ type ]);

  useEffect(() => {
    if (id) {
      const fetchArticle = async () => {
        const response = await fetchData(`admin/editor/${id}`);
        if ( response && !(response.status === 200) ) return;
        
        setTitle( response?.data.title );
        setType( response?.data.type );
        setHasContent( response?.data.has_content );
        setImageCover( response?.data.img_cover );
        setTotalScore( response?.data.score );
        setDescription( response?.data.description );
        setParent( response?.data.ID_Parent );
        setParentType( response?.data.parent_type );
        setPreviousArticle( response?.data.ID_Prev_Article );
        setContent( response?.data.content );
      }
      fetchArticle();
    }
  }, [ id ]);

  return {
    isSaving,
    saved,

    hasContent,
    type,
    parentType,
    description,
    title,
    imageCover,
    content,
    totalScore,
    parent,
    previousArticle,

    onSubmit,

    setTitle : handleTextChange( setTitle ),
    setType : handleInputChange( setType ),
    setHasContent : handleHasContentChange,
    setImageCover : handleTextChange( setImageCover ),
    setTotalScore : handleInputChange( setTotalScore ),
    setDescription : handleTextChange( setDescription ),
    setParent : handleInputChange( setParent ),
    setPreviousArticle : handleInputChange( setPreviousArticle ),
    setContent : handleTextChange( setContent )
  }
}
