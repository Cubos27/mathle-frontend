import { Fragment } from "react/jsx-runtime"

interface IAdminLayoutProps {
  children: React.ReactNode,
  props?: any
}

export default function AdminLayout({ children, ...props } : IAdminLayoutProps) {
  return (
    <Fragment { ...props }>
      <header>
        <h1>Admin</h1>
      </header>
      <main>
        { children }
      </main>
    </Fragment>
  )
}
