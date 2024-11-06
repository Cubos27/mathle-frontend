import { useState, useEffect, ChangeEventHandler } from "react";

export default function useEditor() {
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

  const handleHasContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHasContent(event.target.checked);
  }

  const handleTextChange = ( setValue : Function ) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value;
    const formattedText = handleAutoComplete( inputText );

    console.log( formattedText );
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

  useEffect(() => {
    /*
     * if type is 2 (topic), then parentType must be 1
     * if type is 3 (subtopic), then parentType must be 2
    */
    setParentType( type - 1 );
  }, [ type ]);

  return {
    isSaving,
    hasContent,
    type,
    parentType,
    description,
    title,
    imageCover,
    content,

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
