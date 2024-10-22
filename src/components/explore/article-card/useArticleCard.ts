import { useNavigate } from "react-router-dom"

export default function useArticleCard( type : string, title : string, article : boolean ) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    const prePath = ( type : string ) => `/${type}/${title.replace(/\s+/g, '-').toLocaleLowerCase()}`;
    if ( !article ) navigate( prePath( type ) );
    else navigate( prePath( 'article' ) );
  }

  return {
    handleNavigation
  }
}
