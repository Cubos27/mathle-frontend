import useArticleCard from './useArticleCard';

import styles from './article-card.module.css';
import MainButton from '../../main-button';

interface ArticleProps {
  img: string;
  title: string;
  type: string;
  article: boolean;
}

export default function Article({ img, title, type, article } : ArticleProps) {
  const { handleNavigation } = useArticleCard( type, title, article );
  return (
    <article className={ styles[`article-card`] }>
      
      <figure className={ styles[`article-card__image`] }>
        <img src={ img } alt={ title } />
      </figure>

      <section className={ styles[`article-card__content`] }>
        <section className={ styles[`article-card__description`] }>
          <h3 className={ styles[`article-card__title`] }>{ title }</h3>
          <p className={ styles[`article-card__type`] }>Material : { type }</p>
        </section>

        <section className={ styles[`article-card__actions`] }>
          <MainButton onClick={ handleNavigation }>View</MainButton>
        </section>
      </section>

    </article>
  )
}
