import useSubject from "./useSubject";
import { TArticle } from "../../../logic/types/TArticle";
import { TLink } from "../../../logic/types/TLink";

import Layout from "../../layout";
import Roadmap from "../../../components/subject/roadmap";

export default function Subject() {
  const { subject, links } : { subject : TArticle | undefined, links : TLink[] } = useSubject();
  const ROADMAP_TITLE = `The ${subject?.title}'s Roadmap`;

  return (
    <Layout>
      <h2> { ROADMAP_TITLE } </h2>

      <Roadmap links={ links } />
    </Layout>
  )
}
