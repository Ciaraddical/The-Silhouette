import React, { useEffect, useState } from 'react'
import Header from './Header'
import Nav from './Nav'
import Body from './Body'
// import { getFruits } from '../apis/fruits'

function App () {
  // const [fruits, setFruits] = useState([])
  // useEffect(() => {
  //   getFruits()
  //   .then(fruits => {
  //     setFruits(fruits)
  //   })
  // }, [])

  return (
    <>
      <div className='app'>
        <Header />
        <Nav />
        <Body />
        <ul>
          {/* {fruits.map(fruit => (
            <li key={fruit}>{fruit}</li>
          ))} */}
        </ul>
      </div>
    </>
  )
}

export default App
