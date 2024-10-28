import { useState, useEffect } from "react";

import { TOrderedLink } from "../../../logic/types/TOrderedLink";

export default function useRoadmap(links : TOrderedLink[]) {
  const [ orderedLinks, setOrderedLinks ] = useState<TOrderedLink[][]>([]);

  const orderLinks = () => {
    const localLinks : TOrderedLink[][] = [];
    const FIRST_INDEX = 0;

    links.forEach( link => {
      // If the link doesn't have a previous article, it's one of the first ones
      if ( !link.prev_article ) {
        if ( !localLinks[ FIRST_INDEX ] ) localLinks.push([]);
        localLinks[ FIRST_INDEX ].push( link );
      }
      
      /*
        If the link has a previous article, we need to find the index of the group that has the previous article
        If it doesn't exist, we create a new group
      */
      if ( link.prev_article ) {
        const index = localLinks.findIndex( localLink => localLink[0].prev_article === link.prev_article );
        if ( index === -1 ) localLinks.push([]);
        const indexToInsert = index === -1 ? localLinks.length - 1 : index;
        localLinks[ indexToInsert ].push(link);
      }
    });
    if ( localLinks.length >= 1 ) setOrderedLinks(localLinks);
  }

  useEffect(() => {
    if ( links.length >= 1 ) orderLinks();
  }, [links]);

  return {
    orderedLinks
  };
}
