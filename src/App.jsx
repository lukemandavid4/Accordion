import { useState } from 'react';
import './App.css'
import { FaPlus } from "react-icons/fa6";

const App = () => {
  const [openOne, setOpenOne] = useState(false)
  const [openTwo, setOpenTwo] = useState(false)
  const [openThree, setOpenThree] = useState(false)
  const [openFour, setOpenFour] = useState(false)
  const handleClickOne = () =>{
    setOpenOne(!openOne)
  }
  const handleClickTwo = () =>{
    setOpenTwo(!openTwo)
  }
  const handleClickThree = () =>{
    setOpenThree(!openThree)
  }
  const handleClickFour = () =>{
    setOpenFour(!openFour)
  }
  return (
    <div className='container'>
      <div className="container__top">
        <div className="container__top--center">
          <h1>Poverty is not God&apos;s <br /> plan. You are.</h1>
          <p>Your gift will tranform lives and <br /> play a part in ending extreme poverty <br /> and injustice around the world.</p>
          <button type="button">Donate now</button>
        </div>
      </div>
      <div className="container__bottom">
        <div className="container__bottom--header">
          <h1>Browse course modules</h1>
        </div>
        <div className="container__bottom--accordion">
          <div className="bottom__accordion">
            <div className={`bottom__accordion--one ${openOne ? 'rotate' : ''}`} onClick={handleClickOne}>
              <span>1. Preparedness</span>
              <span id='span'><FaPlus /></span>
            </div>
            <div className={`bottom__accordion--two ${openOne ? 'open' : ''}`}>
              <span>20 word synopsis to go here explaining exactly what this modules is about. More useful as I now know what this is.</span>
            </div>
          </div>
          <div className="bottom__accordion">
            <div className={`bottom__accordion--one ${openTwo ? 'rotate' : ''}`} onClick={handleClickTwo}>
              <span>2. Response</span>
              <span id='span'><FaPlus /></span>
            </div>
            <div className={`bottom__accordion--two ${openTwo ? 'open' : ''}`}>
              <span>20 word synopsis to go here explaining exactly what this modules is about. More useful as I now know what this is.</span>
            </div>
          </div>
          <div className="bottom__accordion">
            <div className={`bottom__accordion--one ${openThree ? 'rotate' : ''}`} onClick={handleClickThree}>
              <span>3. Recovery</span>
              <span id='span'><FaPlus /></span>
            </div>
            <div className={`bottom__accordion--two ${openThree ? 'open' : ''}`}>
              <span>20 word synopsis to go here explaining exactly what this modules is about. More useful as I now know what this is.</span>
            </div>
          </div>
          <div className="bottom__accordion">
            <div className={`bottom__accordion--one ${openFour ? 'rotate' : ''}`} onClick={handleClickFour}>
              <span>4. Mitigation</span>
              <span id='span'><FaPlus /></span>
            </div>
            <div className={`bottom__accordion--two ${openFour ? 'open' : ''}`}>
              <span>20 word synopsis to go here explaining exactly what this modules is about. More useful as I now know what this is.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
