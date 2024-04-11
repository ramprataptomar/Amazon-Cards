import './App.css'
import Card from './components/Card'
import Apple from "/src/assets/apple-pencil-gen2-splitter-202310-removebg-preview.png"
import Logitech from "./assets/logitech-mx-master-3-grey-3-removebg-preview.png"
import Zeb from "./assets/Zeb-Transformer_1-removebg-preview.png"
import Portronics from "./assets/Portronics_Toad_III-removebg-preview.png"

function App() {
  const card_information = [
    {
        id: 0,
        title:"Logitech MX Master 3S",
        picture: Logitech,
        description:[
            "8000 DPI",
            "5 Programmable Buttons"
        ],
        oldPrice: "12,495",
        newPrice: "8,999"
    },
    {
        id: 1,
        title:"Apple Pencil (2nd Gen)",
        picture: Apple,
        description:[
            "Intuitive touch surface",
            "Designed for iPad Pro"
        ],
        oldPrice: "11,900",
        newPrice: "9,199"
    },
    {
        id: 2,
        title:"Zebronics Zeb-Transformer",
        picture: Zeb,
        description:[
            "Intuitive touch surface",
            "Designed for iPad Pro"
        ],
        oldPrice: "1,599",
        newPrice: "899"
    },
    {
        id: 3,
        title:"Portronics Toad 23 Wireless Mouse",
        picture: Portronics,
        description:[
            "Wireless Mouse 2.4GHz",
            "Optical Orientation"
        ],
        oldPrice: "599",
        newPrice: "278"
    }
  ]

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
