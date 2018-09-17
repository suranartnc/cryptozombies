import Login from '@pages/Login'
import Home from '@pages/Home'
import About from '@pages/About'

import withAuth from '@hocs/withAuth'
import { compose } from 'redux'

export default [
  {
    path: '/',
    exact: true,
    component: Login
  },
  {
    path: '/home',
    exact: true,
    component: Home
  },
  {
    path: '/about',
    component: compose(withAuth)(About)
  }
]
