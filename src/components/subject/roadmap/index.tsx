import { TOrderedLink } from "../../../logic/types/TOrderedLink";
import useRoadmap from "./useRoadmap";

import styles from "./roadmap.module.css";
import TopicCard from "../topic-card";

export default function Roadmap({ links } : { links : TOrderedLink[] }) {
  const { orderedLinks } = useRoadmap(links);

  return (
    <section className={ styles[`roadmap`] }>
      {
        ( orderedLinks && orderedLinks.length >= 1 ) && orderedLinks.map((group, index) => (
          <section className={ styles[`roadmap__group`] } key={ index }>
            {
              group.map((link) => (
                <TopicCard 
                  key={ link.toDisplay }
                  { ...link }
                />
              ))
            }
          </section>
        ))
      }
    </section>
  )
}
