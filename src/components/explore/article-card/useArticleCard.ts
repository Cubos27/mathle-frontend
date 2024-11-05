import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useArticleCard( relativePath : string, type : number ) {
  const [ materialName, setMaterialName ] = useState<string>('Subtopic');
  const navigate = useNavigate();

  const handleNavigation = () => {
    const prePath = ( relativePath: string) => {
      return `/learn/${ relativePath.replace(/\s+/g, '-').toLocaleLowerCase() }`;
    }
    navigate( prePath( relativePath ) );
  }

  useEffect(() => {
    if ( type === 1 ) setMaterialName('Subject');
    if ( type === 2 ) setMaterialName('Topic');
    if ( type === 3 ) setMaterialName('Subtopic');
  }, [ type ]);

  return {
    handleNavigation,
    materialName
  }
}
