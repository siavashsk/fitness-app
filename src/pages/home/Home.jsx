import React from 'react'
import Panel from '../../components/panel/Panel'
import Progress from '../../components/progress/Progress'
import './home.css'

export default function Home() {
  return (
    <div className='home'>
      <Panel />
      <Progress />
    </div>
  )
}
