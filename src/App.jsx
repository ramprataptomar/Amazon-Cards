import './App.css'
import Card from './components/Card'
import card_information from '../src/assets/Data.js'

function App() {

  return (
    <>
      <div className='amazon-card'>
        <div className='cards-detail'>
          <h3>Blockbuster series on computer accessories | shop Now</h3>
        </div>
        <div className='cards'>
          <Card Data={card_information[0]}/>
          <Card Data={card_information[1]}/>
          <Card Data={card_information[2]}/>
          <Card Data={card_information[3]}/>
        </div>
      </div>
    </>
  )
}

export default App
