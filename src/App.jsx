import { useEffect, useState } from "react"
import axios from 'axios'
function App() {
  const [data, setData] = useState([]);
    const getData = async() => {
      try {
        const response = await axios.get(`https://geo.ipify.org/api/v2/country?apiKey=${import.meta.env.VITE_KEY}&ipAddress=${import.meta.env.VITE_IP}`);
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error("Error", error)
      }
    }
   

    useEffect(() => {
      getData();
    }, []);

  return (
    <>
      <p>IP Address: <span className="bg-yellow-200 text-red-600">{data.ip}</span></p> 
      <p>ISP: <span className="bg-yellow-200 text-red-600">{data.isp}</span></p>
      <p>Country: <span className="bg-yellow-200 text-red-600">{data.location.country}</span></p>
      <p>Region: <span className="bg-yellow-200 text-red-600">{data.location.region}</span></p>
    </>
  )
}

export default App
