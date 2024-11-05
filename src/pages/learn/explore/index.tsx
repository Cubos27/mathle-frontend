import useExplore from './useExplore';

import styles from './explore.module.css';
import Layout from '../../layout';

import ArticleCard from '../../../components/explore/article-card';
import SearchBar from '../../../components/explore/search-bar';

export default function Explore() {
  const { articles, loading } = useExplore();

  return (
    <Layout>
      <h2>Explore</h2>

      <SearchBar />

      <section className={ styles[`explore__articles`] }>
        { articles.map((article) => (
          <ArticleCard 
            key={ article.ID_Article } 
            { ...article }
          />
        )) }
        { loading && <p>Loading...</p> }
        { !loading && !articles.length && <p>No articles found</p> }
      </section>
      
    </Layout>
  )
}
