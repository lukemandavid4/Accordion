import './App.css'
import { FaPlus } from "react-icons/fa6";

const App = () => {
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
            <div className="bottom__accordion--one">
              <span>1. Preparedness</span>
              <span><FaPlus /></span>
            </div>
            <div className="bottom__accordion--two">
              <span>20 word synopsis to go here explaining exactly what this modules is about. More useful as I now know what this is.</span>
            </div>
          </div>
          <div className="bottom__accordion">
            <div className="bottom__accordion--one">
              <span>2. Response</span>
              <span><FaPlus /></span>
            </div>
            <div className="bottom__accordion--two">
              <span>20 word synopsis to go here explaining exactly what this modules is about. More useful as I now know what this is.</span>
            </div>
          </div>
          <div className="bottom__accordion">
            <div className="bottom__accordion--one">
              <span>3. Recovery</span>
              <span><FaPlus /></span>
            </div>
            <div className="bottom__accordion--two">
              <span>20 word synopsis to go here explaining exactly what this modules is about. More useful as I now know what this is.</span>
            </div>
          </div>
          <div className="bottom__accordion">
            <div className="bottom__accordion--one">
              <span>4. Mitigation</span>
              <span><FaPlus /></span>
            </div>
            <div className="bottom__accordion--two">
              <span>20 word synopsis to go here explaining exactly what this modules is about. More useful as I now know what this is.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
