import React from 'react'
import styles from './app.module.scss'
const App = (): JSX.Element => {
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

export default App
