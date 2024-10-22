import { useNavigate } from "react-router-dom"

export default function useArticle( type : string, title : string) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    const path = `${type}/${title.replace(/\s+/g, '-').toLocaleLowerCase()}`;
    navigate( path );
  }

  return {
    handleNavigation
  }
}
