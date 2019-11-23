import React, { Suspense } from 'react'
import { Router, Redirect } from '@reach/router'
import { Header } from '../../components/layout/Header'
import { BlockLoading } from '../../components/BlockLoading'
import './styles.scss'

const PageOne = React.lazy(() => import('../Customers'))
const PageTwo = React.lazy(() => import('../Calculator'))

const Home = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<BlockLoading />}>
        <section className='wrapper-container'>
          <Router>
            <Redirect from='/' to='page-1' />
            <PageOne path='page-1' />
            <PageTwo path='page-2' />
          </Router>
        </section>
      </Suspense>
    </div>
  )
}

export default Home
