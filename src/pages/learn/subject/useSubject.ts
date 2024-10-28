import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";

import { TArticle } from "../../../logic/types/TArticle";
import { TOrderedLink } from "../../../logic/types/TOrderedLink";

import dummyArticles from "../../../logic/dummies/dummy_articles";

export default function useSubject() {
  const [ subject, setSubject ] = useState<TArticle>();
  const [ links, setLinks ] = useState<TOrderedLink[]>([]);
  const { subject : subjectParam } = useParams<{ subject: string }>();

  useEffect(() => {
    if ( subjectParam ) {
      const titleFormatted = ( title : string ) => title.replace(/\s+/g, '-').toLocaleLowerCase();
      const localSubject = dummyArticles.find( article => titleFormatted(article.title) === subjectParam );
      if ( localSubject ) setSubject( localSubject );
    }
  }, [subjectParam]);

  useEffect(() => {
    if ( subject ) {
      const localLinks = dummyArticles.filter( article => article.parent_id === subject.id_article );
      if ( localLinks ) {
        const formattedLinks = localLinks.map( link => {
          return {
            id_article: link.id_article,
            toDisplay: link.title,
            link: `/learn/${ subjectParam }/${ link.title }`.replace(/\s+/g, '-').toLocaleLowerCase(),
            prev_article: link.prev_article,
          }
        });
        setLinks(formattedLinks);
      }
    }
  }, [subject]);

  return {
    subject,
    links
  }
}
