import styles from './explore.module.css';
import Layout from '../layout';

import ArticleCard from '../../components/explore/article-card';
import SearchBar from '../../components/explore/search-bar';

export default function Explore() {
  return (
    <Layout>
      <h2>Explore</h2>

      <SearchBar />

      <section className={ styles[`explore__articles`] }>
        <ArticleCard 
          img='https://th.bing.com/th/id/OIP.FY3xcwVCza7NoAxsWEK0PQHaGp?rs=1&pid=ImgDetMain'
          title='Article 1'
          type='subject'
        />

        <ArticleCard 
          img='https://th.bing.com/th/id/OIP.FY3xcwVCza7NoAxsWEK0PQHaGp?rs=1&pid=ImgDetMain'
          title='Article 1'
          type='course'
        />
      </section>
      
    </Layout>
  )
}
