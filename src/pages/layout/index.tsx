import { Fragment } from 'react/jsx-runtime'

import MainHeader from '../../components/main-header'
import Up from '../../components/up'

export default function Layout({ children, ...props } : { children: React.ReactNode }) {
  return (
    <Fragment {...props}>
      <MainHeader />
      <main>{ children }</main>
      <Up />
    </Fragment>
  )
}
