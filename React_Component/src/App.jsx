import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  // component,props

  return (
    <>
      <div className='grid'>
        <Card title="IRON_MAN" description="Iron Man, also known as Tony Stark, is a genius inventor and billionaire who builds a high-tech armored suit to fight threats."/>
        
        <Card title="THOR" description="Thor is the Norse God of Thunder, wielding the enchanted hammer Mjolnir and later Stormbreaker."/>

        <Card title="HULK" description="Hulk is the green, super-strong alter ego of scientist Bruce Banner, unleashed by gamma radiation."/>

        <Card title="CAP_AMER" description="Captain America, also known as Steve Rogers, is a super-soldier enhanced to peak human perfection."/>
      </div>
    </>
  )
}

export default App
