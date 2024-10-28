import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";

export default function useArticle() {
  const [ tittleFormatted, setTittleFormatted] = useState<string>('');
  const { subtopic, topic } = useParams();

  useEffect(()=>{
    if (!subtopic || !topic) return;

    const tittleToFormat = subtopic || topic;
    const tittleFormatted = tittleToFormat.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
    setTittleFormatted(tittleFormatted);
  }, [ subtopic, topic ]);
  return {
    name : tittleFormatted,
  }
}
