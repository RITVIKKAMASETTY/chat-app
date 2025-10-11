import React from 'react'
import type App from '../App'
import AppLayout from '../components/layout/AppLayout'
function Home() {
  return (
    <div>
      home
    </div>
  )
}
const WrappedHome = AppLayout()(Home);
export default WrappedHome;
