import useExplore from './useExplore';

import styles from './explore.module.css';
import Layout from '../../layout';

import ArticleCard from '../../../components/explore/article-card';
import SearchBar from '../../../components/explore/search-bar';

export default function Explore() {
  const { articles, loading, handleQueryChange, query, onSubmitQuery, onClearQuery } = useExplore();

  return (
    <Layout>
      <h2>Explore</h2>

      <SearchBar 
        onSubmit={ onSubmitQuery }
        onChange={ handleQueryChange }
        onClear={ onClearQuery }
        value={ query }
      />

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
