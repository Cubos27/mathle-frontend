import { useParams } from "react-router-dom"

export default function useArticle() {
  const { name } = useParams();

  return {
    name
  }
}
