import { useState, useEffect } from 'react'

import fetchData from '../../../logic/utils/fetch';

export default function useArticleDashboard() {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    const data = await fetchData('admin/articles');
    if (data?.status === 200 && data.data.articles) setArticles( data.data.articles );
  }

  useEffect( () => {
    fetchArticles();
  }, []);

  return {
    articles
  }
}
