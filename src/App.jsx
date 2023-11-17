import { useState, useEffect } from 'react'
import './App.css'
import DAPI from './APIs/DAPI'

function App() {
  const [name, setName] = useState("")

  useEffect(() => {
      const fetchData =  () => {
          try {
              DAPI.get("10").then((res) => {
                  console.log(res)
                  setName(res.data.name)
              })
          } catch (error) {
              console.log(error)
          }
      }
      fetchData()
  }, [])
  return (
    <>
        {
            name
        }
    </>
  )
}

export default App
