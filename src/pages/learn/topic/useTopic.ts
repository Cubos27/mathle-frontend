import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import dummyArticles from "../../../logic/dummies/dummy_articles"
import { TArticle } from "../../../logic/types/TArticle";


export default function useTopic() {
  const [ topicData, setTopicData ] = useState<TArticle | undefined>( undefined );
  const [ subtopics, setSubtopics ] = useState<object>( [] );
  const { topic } = useParams();

  useEffect(() => {
    const topicInfo = dummyArticles.find(article => article.title.replace(/\s+/g, '-').toLocaleLowerCase() === topic);
    setTopicData( topicInfo );
  }, [topic]);

  useEffect(() => {
    if (topicData) {
      const subtopics = dummyArticles.map( (subtopic : TArticle) => subtopic.parent_id === topicData.id_article ? subtopic.title : '' );
      const filteredSubtopics = subtopics.filter( (subtopic : string) => subtopic !== '' );

      setSubtopics( filteredSubtopics );
    }
  }, [topicData]);

  return {
    topic : topicData,
    subtopics
  }
}
