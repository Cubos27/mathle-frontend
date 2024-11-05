import { useState, useEffect, ChangeEventHandler } from "react";

export default function useEditor() {
  const [ title, setTitle ] = useState('');
  const [ type, setType ] = useState(1);
  const [ isArticle, setIsArticle ] = useState(false);
  const [ imageCover, setImageCover ] = useState('');
  const [ totalScore, setTotalScore ] = useState(0);
  const [ description, setDescription ] = useState('');

  const [ parent, setParent ] = useState(0);
  const [ parentType, setParentType ] = useState(0);
  const [ previousArticle, setPreviousArticle ] = useState(0);

  const [ content, setContent ] = useState('');

  const [ isSaving, setIsSaving ] = useState(false);

  const handleIsArticleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsArticle(event.target.checked);
  }

  const handleInputChange = ( setValue : Function ) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  return {
    isSaving,
    isArticle,
    type,

    setTitle : handleInputChange( setTitle ),
    setType : handleInputChange( setType ),
    //setType : handleTypeChange,
    setIsArticle : handleIsArticleChange,
    setImageCover : handleInputChange( setImageCover ),
    setTotalScore : handleInputChange( setTotalScore ),
    setDescription : handleInputChange( setDescription ),
    setParent : handleInputChange( setParent ),
    setParentType : handleInputChange( setParentType ),
    setPreviousArticle : handleInputChange( setPreviousArticle ),
    setContent : handleInputChange( setContent )
  }
}
