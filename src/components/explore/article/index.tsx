import useArticle from './useArticle';

import styles from './article.module.css';
import MainButton from '../../main-button';

interface ArticleProps {
  img: string;
  title: string;
  type: string;
}

export default function Article({ img, title, type } : ArticleProps) {
  const { handleNavigation } = useArticle( type, title);
  return (
    <article className={ styles[`article`] }>
      
      <figure className={ styles[`article__image`] }>
        <img src={ img } alt={ title } />
      </figure>

      <section className={ styles[`article__content`] }>
        <section className={ styles[`article__description`] }>
          <h3 className={ styles[`article__title`] }>{ title }</h3>
          <p className={ styles[`article__type`] }>Material : { type }</p>
        </section>

        <section className={ styles[`article__actions`] }>
          <MainButton onClick={ handleNavigation }>View</MainButton>
        </section>
      </section>

    </article>
  )
}
