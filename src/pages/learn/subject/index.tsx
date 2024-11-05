import useSubject from "./useSubject";
import { TOrderedLink } from "../../../logic/types/TOrderedLink";

import Layout from "../../layout";
import Roadmap from "../../../components/subject/roadmap";

export default function Subject() {
  const { subjectName, links } : { subjectName : string | undefined, links : TOrderedLink[] } = useSubject();
  const ROADMAP_TITLE = `The ${ subjectName }'s Roadmap`;

  return (
    <Layout>
      <h2> { ROADMAP_TITLE } </h2>

      <Roadmap links={ links } />
    </Layout>
  )
}
