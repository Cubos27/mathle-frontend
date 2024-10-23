import useSubject from "./useSubject"

import Layout from "../layout"

export default function Subject() {
  const { subject } = useSubject();
  const ROADMAP_TITLE = `The ${subject}'s Roadmap`
  return (
    <Layout>
      <h2> { ROADMAP_TITLE } </h2>
    </Layout>
  )
}
