import { useParams } from "react-router-dom"

export default function useArticle() {
  const { subtopic, topic } = useParams();

  return {
    name : subtopic || topic,
  }
}
