import useArticleCard from './useArticleCard';

import onErrorImage from '../../../assets/imgs/mathle_error_img.webp'

import styles from './article-card.module.css';
import MainButton from '../../main-button';

interface ArticleProps {
  ID_Article?: number;
  img_cover: string;
  title: string;
  type: number//'subject' | 'topic' | 'subtopic';
  article?: boolean;
  relativePath: string;
}

export default function Article({ img_cover, title, type, relativePath } : ArticleProps) {
  const { handleNavigation, materialName } = useArticleCard( relativePath, type );

  return (
    <article className={ styles[`article-card`] }>
      
      <figure className={ styles[`article-card__image`] }>
        <img 
          src={ img_cover } 
          alt={ title } 
          onError={ (e) => (e.target as HTMLImageElement).src = onErrorImage }
        />
      </figure>

      <section className={ styles[`article-card__content`] }>
        <section className={ styles[`article-card__description`] }>
          <h3 className={ styles[`article-card__title`] }>{ title }</h3>
          <p className={ styles[`article-card__type`] }>Material: { materialName }</p>
        </section>

        <section className={ styles[`article-card__actions`] }>
          <MainButton onClick={ handleNavigation }>View</MainButton>
        </section>
      </section>

    </article>
  )
}
