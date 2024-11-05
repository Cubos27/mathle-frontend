import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { TLink } from "../logic/types/TLink";

export default function useLearnParams() {
  const [ links, setLinks ] = useState<TLink[]>( [] );
  const { subject, topic, subtopic } = useParams();

  useEffect(() => {
    const items = [ subject, topic, subtopic ];
    const linksToSet : TLink[] = [];

    items.forEach( (item : string | undefined, index: number ) => {
      if (item) {
        const formatedItem = item.split(':')[1].replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
        const previousLink = linksToSet[ index - 1 ] ? linksToSet[ index - 1 ].link + '/' : '';

        linksToSet.push({
          toDisplay : formatedItem, 
          link : `${ previousLink }${ item }` 
        } );
      }
    });

    setLinks( linksToSet );
  }, [topic, subject, subtopic]);

  return {
    links
  }
}