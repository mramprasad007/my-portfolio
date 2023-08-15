import React from 'react'
import styles from './overview.module.scss'
import ramImage from '../../assets/ram-image.png'
import downloadIcon from '../../assets/download.svg'
import githubIcon from '../../assets/github.svg'
import linkedinIcon from '../../assets/linkedin.svg'

const resumeDownloadLink = 'https://drive.google.com/uc?export=download&id=18RA4OfuTMI-MO_ml3T94ms5IM0eJH1xW'
const linkedInLink = 'https://www.linkedin.com/in/ramprasad94'
const githubLink = 'https://github.com/mramprasad007'

const Overview = (): JSX.Element => {
  const handleDownload = (link: string, name: string): void => {
    // Setting various property values
    const alink = document.createElement('a')
    alink.href = link
    alink.download = name
    alink.click()
  }
  const handleRedirect = (link: string): void => {
    // Setting various property values
    const alink = document.createElement('a')
    alink.href = link
    alink.target = '_blank'
    alink.rel = 'noopener noreferrer'
    alink.click()
  }
  return (
    <div className={`${styles.overview}`}>
      <div className={`${styles.overview_bio}`}>
        <div className={`${styles.overview_bio_container}`}>
          <div className={`${styles.overview_desc}`}>
            <div className={`${styles.overview_desc_container}`}>
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
                <div className={`${styles.overview_social_icon}`} onClick={() => { handleRedirect(linkedInLink) }}>
                  <img src={linkedinIcon} alt="linkedin icon"></img>
                </div>
                <div className={`${styles.overview_social_icon}`} onClick={() => { handleRedirect(githubLink) }}>
                  <img src={githubIcon} alt="github icon"></img>
                </div>
                <div className={`${styles.overview_social_icon}`} onClick={() => { handleDownload(resumeDownloadLink, 'Resume.pdf') }}>
                  <img src={downloadIcon} alt="download icon"></img>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.overview_image}`}>
            <img src={ramImage} alt="ram image"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
