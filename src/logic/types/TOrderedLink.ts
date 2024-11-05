import { TLink } from './TLink';

interface IOrderedLink extends TLink {
  ID_Article: number
  ID_Prev_Article: number
}

export type TOrderedLink = IOrderedLink;