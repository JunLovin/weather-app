import { createContext, useState, useEffect } from 'react'
const KEY = import.meta.env.VITE_VISUAL_CROSSING_API_KEY

export const UseWeatherApiContext = createContext()

function UseWeatherApi({ children }) {
    const [ city, setCity ] = useState('New York')
    const [data, setData] = useState(null)
    const [celcius, setCelcius] = useState(true)

    const fetchData = async (city) => {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/?key=${KEY}`)
        const data = await response.json()
        setData(data)
        return data
    }

    useEffect(() => {
        fetchData(city)
    }, [])

    return (
        <>
        <UseWeatherApiContext.Provider value={{ fetchData, setCity, data, city, celcius, setCelcius}}>
            {children}
        </UseWeatherApiContext.Provider>
        </>
    )
}

export default UseWeatherApi