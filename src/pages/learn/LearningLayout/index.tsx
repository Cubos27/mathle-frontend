import Layout from "../../layout"
import Navigation from "../../../components/learn/navigation"

export default function LearningLayout({ children, ...props } : { children: React.ReactNode }) {
  return (
    <Layout {...props}>
      <Navigation />
      { children }
    </Layout>
  )
}
