export default function Layout({ children } : { children: React.ReactNode }) {
  return (
    <>
      <header>
        <h1>Layout</h1>
      </header>
      <main>{ children }</main>
    </>
  )
}
