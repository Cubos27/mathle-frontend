import styles from './explore.module.css';
import Layout from '../layout';

import Article from '../../components/explore/article';
import SearchBar from '../../components/explore/search-bar';

export default function Explore() {
  return (
    <Layout>
      <h2>Explore</h2>

      <SearchBar />

      <section>
        <Article />
      </section>
    </Layout>
  )
}
