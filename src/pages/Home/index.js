import React, { Suspense } from 'react'
import { Router } from '@reach/router'
import { Header } from '../../components/layout/Header'

const PageOne = React.lazy(() => import('../Customers'))

const BlockLoading = () => <p>Loading...</p>

const Home = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<BlockLoading />}>
        <div>
          <Router>
            <PageOne path='page-1' />
          </Router>
        </div>
      </Suspense>
    </div>
  )
}

export default Home
