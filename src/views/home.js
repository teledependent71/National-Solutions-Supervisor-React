import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>National Solutions Supervisor</title>
        <meta property="og:title" content="National Solutions Supervisor" />
      </Helmet>
    </div>
  )
}

export default Home
