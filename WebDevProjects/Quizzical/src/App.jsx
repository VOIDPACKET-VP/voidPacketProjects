import { useState } from 'react'
import Questions from './Components/Questions'

import topRightBlob from './assets/blobsUp.png'
import bottomLeftBlob from './assets/blobs.png'

export default function App() {

  return (
    <>
      <img src={topRightBlob} className="bg-img top-right" alt="" />
      <img src={bottomLeftBlob} className="bg-img bottom-left" alt="" />

      <Questions />
    </>
  )
}
