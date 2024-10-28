import { TLink } from './TLink';

interface IOrderedLink extends TLink {
  id_article: number;
  prev_article: number;
}

export type TOrderedLink = IOrderedLink;