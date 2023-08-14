import React from 'react'
import styles from './home.module.scss'
import Header from '../../components/header'
import Overview from '../../components/overview'

const Home = (): JSX.Element => {
  return (
    <div className={`${styles.home}`}>
      <Header></Header>
      <Overview></Overview>
    </div>
  )
}

export default Home
