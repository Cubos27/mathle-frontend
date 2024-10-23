import { useNavigate } from "react-router-dom";

export default function useArticleCard( relativePath : string ) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    const prePath = ( relativePath: string) => {
      return `/learn/${ relativePath.replace(/\s+/g, '-').toLocaleLowerCase() }`;
    }
    navigate( prePath( relativePath ) );
  }

  return {
    handleNavigation
  }
}
