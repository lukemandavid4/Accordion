import './App.css'

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
          <div className="bottom__accordion"></div>
          <div className="bottom__accordion"></div>
          <div className="bottom__accordion"></div>
          <div className="bottom__accordion"></div>
        </div>
      </div>
    </div>
  )
}

export default App
