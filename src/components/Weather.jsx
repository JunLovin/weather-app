import { useContext 

} from 'react'
import { UseWeatherApiContext } from '@context/UseWeatherApi'

function Weather(){
    const { data, celcius, setCelcius } = useContext(UseWeatherApiContext)

    if (data !== null) {
        console.log("Data fetched!")
    }

    const farenheitToCelcius = (farenheit) => {
        let celcius = (farenheit - 32) * 5/9
        return celcius.toFixed(0)
    }

    const handleFarenheit = () => {
        setCelcius(false)
    }

    const handleCelcius = () => {
        setCelcius(true)
    }

    return (
        <>
        <div className="flex justify-around w-[1200px] h-[300px] mt-8 max-[80rem]:w-[100%] max-[33.125rem]:px-4">
            <div className="conditions-container flex flex-col justify-between w-max">
                <div className="conditions">
                    <h2 className="text-6xl font-bold text-white mb-2 max-[1000px]:text-5xl">{data && data.currentConditions.conditions}</h2>
                    <h3 className="text-2xl font-bold text-white w-[80%] max-[1000px]:text-xl max-[33.125rem]:text-[.9rem]">{data && data.description}</h3>
                </div>
                <div className="conditions-celcius flex flex-col gap-2 w-max">
                    <h3 className="text-7xl text-white font-bold">{celcius ? farenheitToCelcius(data && data.currentConditions.temp) : data.currentConditions.temp.toFixed(0)}{celcius ? '°C' : '°F'}</h3>
                    <div className="change-buttons flex justify-center gap-8 w-full text-gray-400 font-bold text-2xl">
                        <span className="hover:text-neutral-50 transition-colors duration-200 cursor-pointer" onClick={handleCelcius}>C°</span>
                        <span className="hover:text-neutral-50 transition-colors duration-200 cursor-pointer" onClick={handleFarenheit}>F°</span>
                    </div>
                </div>
            </div>
            <div className="icon text-white">
                {data && data.currentConditions.conditions.includes('Rain') ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="" height="" className="w-[280px] h-[280px] max-[1000px]:w-[240px] max-[1000px]:h-[240px] max-[700px]:w-[200px] max-[700px]:h-[200px] max-[33.125rem]:w-[160px] max-[33.125rem]:h-[160px] max-[25rem]:w-[150px] max-[25rem]:h-[150px]" viewBox="0 0 8 8"><path fill="currentColor" d="M4.5 0C3.29 0 2.23.86 2 2C.9 2 0 2.9 0 4c0 .53.2.99.53 1.34c.26-.22.6-.34.97-.34c.2 0 .39.05.56.13C2.23 4.49 2.8 4 3.5 4c.69 0 1.27.49 1.44 1.13c.17-.07.36-.13.56-.13c.63 0 1.15.39 1.38.94c.64-.17 1.13-.75 1.13-1.44c0-.65-.42-1.29-1-1.5v-.5A2.5 2.5 0 0 0 4.51 0zM3.34 5a.5.5 0 0 0-.34.5v2a.5.5 0 1 0 1 0v-2a.5.5 0 0 0-.59-.5h-.06zm-2 1a.5.5 0 0 0-.34.5v1a.5.5 0 1 0 1 0v-1a.5.5 0 0 0-.59-.5h-.06zm4 0a.5.5 0 0 0-.34.5v1a.5.5 0 1 0 1 0v-1a.5.5 0 0 0-.59-.5h-.06z"/></svg>
                ) : data && data.currentConditions.conditions.includes('cloudy') ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="" height="" className="w-[280px] h-[280px] max-[1000px]:w-[240px] max-[1000px]:h-[240px] max-[700px]:w-[200px] max-[700px]:h-[200px] max-[33.125rem]:w-[160px] max-[33.125rem]:h-[160px] max-[25rem]:w-[150px] max-[25rem]:h-[150px]" viewBox="0 0 16 16"><g fill="currentColor"><path d="M11.473 9a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 14h8.5a2.5 2.5 0 1 0-.027-5"/><path d="M14.544 9.772a3.5 3.5 0 0 0-2.225-1.676a5.5 5.5 0 0 0-6.337-4.002a4.002 4.002 0 0 1 7.392.91a2.5 2.5 0 0 1 1.17 4.769z"/></g></svg>
                ) 
                : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="" height="" className="w-[280px] h-[280px] max-[1000px]:w-[240px] max-[1000px]:h-[240px] max-[700px]:w-[200px] max-[700px]:h-[200px] max-[33.125rem]:w-[160px] max-[33.125rem]:h-[160px] max-[25rem]:w-[150px] max-[25rem]:h-[150px]" viewBox="0 0 512 512"><path fill="currentColor" d="M340 480H106c-29.5 0-54.92-7.83-73.53-22.64C11.23 440.44 0 415.35 0 384.8c0-26.66 10.08-49.8 29.14-66.91c15.24-13.68 36.17-23.21 59-26.84c.06 0 .08 0 .09-.05c6.44-39 23.83-72.09 50.31-95.68A140.24 140.24 0 0 1 232 160c30.23 0 58.48 9.39 81.71 27.17a142.7 142.7 0 0 1 45.36 60.66c29.41 4.82 54.72 17.11 73.19 35.54C453 304.11 464 331.71 464 363.2c0 32.85-13.13 62.87-37 84.52c-22.89 20.82-53.8 32.28-87 32.28m41.5-260.11a169.2 169.2 0 0 1 45.44 19A96 96 0 0 0 281 129.33q-2.85 2-5.54 4.2a162.5 162.5 0 0 1 57.73 28.23a174.5 174.5 0 0 1 48.31 58.13M448 192h64v32h-64zM320 32h32v64h-32zm-64.65 97.63l12.45-12.45l-44.62-44.63l-22.63 22.63l33.17 33.17h.6a172 172 0 0 1 21.03 1.28m148.853-12.46l44.626-44.625l22.627 22.627l-44.625 44.626z"/></svg>
                )}
            </div>
        </div>
        </>
    )
}

export default Weather