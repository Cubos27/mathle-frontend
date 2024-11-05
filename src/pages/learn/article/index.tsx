import useArticle from "./useArticle"

import LearningLayout from "../LearningLayout";

export default function Article() {
  const { name } = useArticle();
  return (
    <LearningLayout>
      <article>
        <h2>{ name }</h2>
      </article>
    </LearningLayout>
  )
}
