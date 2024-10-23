import useArticle from "./useArticle"

import Layout from "../layout"

export default function Article() {
  const { name } = useArticle();
  return (
    <Layout>
      <article>
        <h2>{ name }</h2>
      </article>
    </Layout>
  )
}
