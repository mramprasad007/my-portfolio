import React from 'react'
import styles from './overview.module.scss'
import ramImage from '../../assets/ram-image.png'
import downloadIcon from '../../assets/download.svg'
import githubIcon from '../../assets/github.svg'
import linkedinIcon from '../../assets/linkedin.svg'

const Overview = (): JSX.Element => {
  return (
      <div className={`${styles.overview}`}>
        <div className={`${styles.overview_bio}`}>
          <div className={`${styles.overview_desc}`}>
            <div className={`${styles.overview_hi}`}>
              Hi, I am
            </div>
            <div className={`${styles.overview_name}`}>
              Ram Prasad
            </div>
            <div className={`${styles.overview_tagline}`}>
              Full-Stack / Front-End Developer
            </div>
            <div className={`${styles.overview_social}`}>
              <div className={`${styles.overview_social_icon}`}>
                <img src={downloadIcon} alt="download icon"></img>
              </div>
              <div className={`${styles.overview_social_icon}`}>
              <img src={linkedinIcon} alt="linkedin icon"></img>
                </div>
              <div className={`${styles.overview_social_icon}`}>
                <img src={githubIcon} alt="github icon"></img>
              </div>
            </div>
          </div>
          <div className={`${styles.overview_image}`}>
            <img src={ramImage} alt="ram image"></img>
          </div>
        </div>
        <div className={`${styles.overview_summary}`}></div>
      </div>
  )
}

export default Overview
