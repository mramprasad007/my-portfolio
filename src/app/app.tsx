import React from 'react'
import styles from './app.module.scss'
const App = (): JSX.Element => {
  return (
    <div className={`${styles.app}` }>
      <header className={`${styles.app_header}   ${styles.app_header__red}`}>
         <p>
           Portfolio coming soon
        </p>
      </header>
    </div>
  )
}

export default App
