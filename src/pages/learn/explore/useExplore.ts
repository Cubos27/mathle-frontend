import { useState, useEffect } from "react";

import fetchData from "../../../logic/utils/fetch";
import { TArticle } from "../../../logic/types/TArticle";

export default function useExplore() {
  const [ articles, setArticles ] = useState( [] );
  const [ articlesJoined, setArticlesJoined ] = useState<Array<TArticle & { relativePath?: string }>>([]);
  const [ loading, setLoading ] = useState( true );
  
  const getArticle = ( id_article : number ) => articles.find( (article : TArticle) => article.ID_Article === id_article );

  const getRelativePath = ( article : TArticle ) => {
    let relativePath = `${ article.ID_Article }:${ article.title }`;
    if ( article.type === 1 ) return relativePath;

    if ( article.type === 2 && article.ID_Parent ) {
      const parent = getArticle( article.ID_Parent );
      relativePath = `${ parent.ID_Article }:${ parent.title }/${ relativePath }`;
      return relativePath;
    }

    if ( article.type === 3 && article.ID_Parent ) {
      const parent = getArticle( article.ID_Parent );
      relativePath = `${ parent.ID_Article }:${ parent.title }/${ relativePath }`;

      const grandParent = getArticle( parent.ID_Parent );
      relativePath = `${ grandParent.ID_Article }:${ grandParent.title }/${ relativePath }`;
      
      return relativePath;
    }
  }

  const fetchArticles = async () => {
    const response = await fetchData( 'explore', 'GET' );
    if ( response ) setArticles( response.data );
    else setLoading( false );
  }

  useEffect(() => {
    const articlesJoined = articles.map( (article : TArticle) => ({ 
      ...article, 
      relativePath: getRelativePath( article )
    }));
    setArticlesJoined( articlesJoined );
    setLoading( false );
  }, [articles]);

  useEffect(() => {
    fetchArticles();
  }, []);

  return {
    articles : articlesJoined,
    loading
  }
}
