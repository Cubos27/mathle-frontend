import { useParams } from "react-router-dom"

import dummyArticles from "../../logic/dummies/dummy_articles";

export default function useSubject() {
  const { subject } = useParams<{ subject: string }>();
  const article = dummyArticles.find( article => article.title.replace(/\s+/g, '-').toLocaleLowerCase() === subject );

  return {
    subject: article?.title || 'Subject'
  }
}
