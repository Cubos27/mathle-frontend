import MainHeader from '../../components/main-header'
import Up from '../../components/up'

export default function Layout({ children } : { children: React.ReactNode }) {
  return (
    <>
      <MainHeader />
      <main>{ children }</main>
      <Up />
    </>
  )
}
