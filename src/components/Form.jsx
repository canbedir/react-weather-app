import { useState } from "react"
import "../css/form.css"
import axios from "axios"

const Form = ({setInfo,setState}) => {

  const [city, setCity] = useState ("");

  const handleChange = async() => {
    const API = "bad736c785a7f061b424ea0d3e91a921"
    const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric&lang=tr`
    const res = await axios(BASE_URL).then(res => setInfo(res.data))
    setState(true)
  }

  return (
    <div>
      <h1>Hava Durumu</h1>
      <form onSubmit={(e) =>{e.preventDefault(); handleChange()}}> 
        <div className="input">
          <input onChange={(e) => setCity(e.target.value)} className="inputText" type="text" placeholder="Şehir giriniz" />
        </div>
        <div>
          <button type="submit" className="btn">Verileri Getir</button>
        </div>
      </form>
    </div>
  )
}

export default Form