import useTopic from './useTopic';

import { Link } from 'react-router-dom';
import styles from './topic.module.css';
import { onErrorImageFunction } from '../../assets';

import Layout from '../layout';
import Article from '../article';
import Navigation from '../../components/learn/navigation';

export default function Topic() {
  const { topic, subtopics } = useTopic();

  if ( topic?.article ) return <Article />;

  return (
    <Layout>
      <article className={ styles[`topic`] }>
        <Navigation />
        <figure className={ styles[`topic__figure`] }>
          <img 
            className={ styles[`topic__image`] }
            src={ topic?.img_cover } 
            onError={ onErrorImageFunction }
            alt={ topic?.title }
          />
        </figure>

        <section className={ styles[`topic__description`] }>
          <h2>{ topic?.title }</h2>
          <pre>{ topic?.description }</pre>
        </section>

        <section className={ styles[`topic__subtopics-show`] }>
          <h3>Suptopics</h3>
          <ul className={ styles[`topic__subtopics`] }>
            {
              subtopics.map( (subtopic, index) => {
                const formatedSubtopic = subtopic.replace(/\s+/g, '-').toLocaleLowerCase();
                return ( <li> <Link to={ formatedSubtopic } key={ index }>{ subtopic }</Link> </li> )
              })
            }
          </ul>
        </section>
      </article>
    </Layout>
  )
}
