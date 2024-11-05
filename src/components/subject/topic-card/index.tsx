import { Link } from "react-router-dom";
import styles from "./topic-card.module.css";

interface ITopicCardProps {
  toDisplay : string,
  link : string
}

export default function TopicCard({ toDisplay, link } : ITopicCardProps) {
  const CARD_TITLE = `Learn more about ${toDisplay}`;

  return (
    <Link to={ link } title={ CARD_TITLE }>
      <article className={ styles[`topic-card`] }>
        <h3 className={ styles[`topic-card__title`] }>{ toDisplay  }</h3>
      </article>
    </Link>
  )
}
