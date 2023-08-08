import React from 'react'
import styles from './home.module.scss'

const Home = (): JSX.Element => {
  return (
    <div>
      <header className={`${styles.header}   ${styles.header__red}`}>
         <p>
            Portfolio coming soon
        </p>
      </header>
    </div>
  )
}

export default Home
