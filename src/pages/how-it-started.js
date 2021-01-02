import React from 'react'
import NavBar from '../components/nav-bar/NavBar';

export const HowItStarted = () => {
  return (
    <div className='HowItStarted'>
      <NavBar />
      <div className='tabContent'>
        <h1 className='tabHeader'>
          Såhär började det
        </h1>
        <video className='howItStartedVideo' src='https://edg01-prd-se-ixn.solidtango.com/cdn/_definst_/smil:0358281aa6323faada25355815e4145d/z7eq5691.smil/playlist.m3u8' controls></video>
      <div>
        <h1>
          Ankis egna berättelse
        </h1>
          <p>
            loremipsum dolor sit amet, consectetur adipiscing.
          </p>
      </div>
      </div>
    </div>
  )
}

export default HowItStarted;