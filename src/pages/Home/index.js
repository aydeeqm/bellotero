import React, { Suspense } from 'react'
import { Header } from '../../components/layout/Header'

const BlockLoading = () => <p>Loading...</p>

const Home = () => {
  return (
    <div>
      <div>
        <Header />
        <Suspense fallback={<BlockLoading />}>
          <div>duhjhf</div>
        </Suspense>
      </div>
    </div>
  )
}

export default Home
