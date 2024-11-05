import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";

import { TOrderedLink } from "../../../logic/types/TOrderedLink";

import fetchData from "../../../logic/utils/fetch";

export default function useSubject() {
  const [ subjectName, setSubjectName ] = useState<string>();
  const [ idSubject, setIdSubject ] = useState<number>(0);
  const [ preLinks, setPreLinks ] = useState<any>([]);
  const [ links, setLinks ] = useState<TOrderedLink[]>([]);
  const { subject : subjectParam } = useParams<{ subject: string }>();

  useEffect(() => {
    if ( subjectParam ) {
      const [ id, subjectName ]= subjectParam.split(':');
      if ( parseInt( id ) !== 0 ) setIdSubject( parseInt( id ) );
      if ( subjectName ) setSubjectName( subjectName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) );
    }
  }, [subjectParam]);

  const fetchSubject = async () => {
    const data = await fetchData(`subject/${ idSubject }`, 'GET');
    setPreLinks( data?.data );
  }

  useEffect(() => {
    if ( idSubject ) fetchSubject();
  }, [idSubject]);

  useEffect(() => {
    if ( idSubject && preLinks ) {
      const formattedLinks = preLinks.map( link => {
        return {
          ID_Article: link.ID_Article,
          toDisplay: link.title,
          link: `/learn/${ subjectParam }/${ link.ID_Article }:${ link.title }`.replace(/\s+/g, '-').toLocaleLowerCase(),
          ID_Prev_Article: link.ID_Prev_Article,
        }
      });
      setLinks( formattedLinks );
    }
  }, [ idSubject, preLinks ]);

  return {
    subjectName,
    links
  }
}
