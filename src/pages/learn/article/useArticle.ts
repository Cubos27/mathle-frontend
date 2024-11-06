import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";

import fetchData from "../../../logic/utils/fetch";

export default function useArticle() {
  const [ article, setArticle ] = useState(null);
  const { subtopic, topic } = useParams();

  const fetchArticle = async () => {
    const query = subtopic || topic;
    if (!query) return;

    const id = query.split(':')[0];
    if (!id) return;

    const response = await fetchData( `article/${id}` );
    if ( response?.status !== 200 ) return;

    setArticle( response.data );
  }

  useEffect(() => {
    if (!subtopic || !topic) return;
    fetchArticle();

  }, [ subtopic, topic ]);

  return {
    ...article
  }
}
