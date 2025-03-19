import { useContext } from 'react'
import { UseWeatherApiContext } from '@context/UseWeatherApi'
import HourlyCharts from '@components/HourlyCharts'

function Cards() {
    const { data, celcius } = useContext(UseWeatherApiContext)

    const handleDays = (el) => {
        const date = new Date(el.datetime)
        const weekday = date.toLocaleDateString('en-US', { weekday: 'long' })
        return `${weekday}`
    }

    const handleFarenheit = (farenheit) => {
        let celcius = (farenheit - 32) * 5 / 9
        return celcius.toFixed(0)
    }

    return (
        <>
            <div className="cards w-full mt-8">
                <div className="grid grid-cols-5 grid-rows-5 gap-4">
                    <div className="card row-span-5 flex flex-col justify-center items-center p-4">
                    {data && (
                            <>
                                <h2 className="text-5xl text-center font-bold mb-2">{data.address}</h2>
                                <div className="high-low flex justify-between w-full text-xl my-2">
                                    <div>Min: {celcius ? handleFarenheit(data.days[0].tempmin) : data.days[0].tempmin}°</div>
                                    <div>Max: {celcius ? handleFarenheit(data.days[0].tempmax) : data.days[0].tempmax}°</div>
                                </div>
                                <div className="date-time text-lg mt-4">
                                    {new Date().toLocaleDateString('en-US', { 
                                        weekday: 'long', 
                                        year: 'numeric', 
                                        month: 'long', 
                                        day: 'numeric' 
                                    })}
                                </div>
                                <div className="sunrise-sunset flex justify-between w-full mt-4">
                                    <div className="flex flex-col items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2C11.5 2 11 2.19 10.59 2.59L2.59 10.59C1.8 11.37 1.8 12.63 2.59 13.41C3.37 14.2 4.63 14.2 5.41 13.41L12 6.83L18.59 13.41C19.37 14.2 20.63 14.2 21.41 13.41C22.2 12.63 22.2 11.37 21.41 10.59L13.41 2.59C13 2.19 12.5 2 12 2M12 8L6.12 13.88L7.54 15.29L11 11.83V22H13V11.83L16.46 15.29L17.88 13.88L12 8Z" />
                                        </svg>
                                        <span>{data.currentConditions.sunrise.substring(0, 5)}</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 22C11.5 22 11 21.81 10.59 21.41L2.59 13.41C1.8 12.63 1.8 11.37 2.59 10.59C3.37 9.8 4.63 9.8 5.41 10.59L12 17.17L18.59 10.59C19.37 9.8 20.63 9.8 21.41 10.59C22.2 11.37 22.2 12.63 21.41 13.41L13.41 21.41C13 21.81 12.5 22 12 22M12 16L6.12 10.12L7.54 8.71L11 12.17V2H13V12.17L16.46 8.71L17.88 10.12L12 16Z" />
                                        </svg>
                                        <span>{data.currentConditions.sunset.substring(0, 5)}</span>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="card-container col-span-3 row-span-5 grid grid-rows-2 grid-cols-1 gap-4">
                        <div className="card weather-days flex flex-col h-full w-full overflow-x-scroll">
                            <div className="weather-days flex flex-row gap-12 text-center h-full items-center">
                                {data && data.days.map((el, i) => {
                                    return (
                                        <>
                                            <div className="weather-days-title-conditions flex h-[80%] justify-around flex-col gap-2" key={i}>
                                                <div className="title flex gap-2 px-2 pr-4 mx-auto">
                                                    {el.conditions.includes('Rain') ? (
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 8 8"><path fill="currentColor" d="M4.5 0C3.29 0 2.23.86 2 2C.9 2 0 2.9 0 4c0 .53.2.99.53 1.34c.26-.22.6-.34.97-.34c.2 0 .39.05.56.13C2.23 4.49 2.8 4 3.5 4c.69 0 1.27.49 1.44 1.13c.17-.07.36-.13.56-.13c.63 0 1.15.39 1.38.94c.64-.17 1.13-.75 1.13-1.44c0-.65-.42-1.29-1-1.5v-.5A2.5 2.5 0 0 0 4.51 0zM3.34 5a.5.5 0 0 0-.34.5v2a.5.5 0 1 0 1 0v-2a.5.5 0 0 0-.59-.5h-.06zm-2 1a.5.5 0 0 0-.34.5v1a.5.5 0 1 0 1 0v-1a.5.5 0 0 0-.59-.5h-.06zm4 0a.5.5 0 0 0-.34.5v1a.5.5 0 1 0 1 0v-1a.5.5 0 0 0-.59-.5h-.06z" /></svg>
                                                    ) : el.conditions.includes('cloudy') ? (
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><g fill="currentColor"><path d="M11.473 9a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 14h8.5a2.5 2.5 0 1 0-.027-5" /><path d="M14.544 9.772a3.5 3.5 0 0 0-2.225-1.676a5.5 5.5 0 0 0-6.337-4.002a4.002 4.002 0 0 1 7.392.91a2.5 2.5 0 0 1 1.17 4.769z" /></g></svg>
                                                    )
                                                        : (
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path fill="currentColor" d="M340 480H106c-29.5 0-54.92-7.83-73.53-22.64C11.23 440.44 0 415.35 0 384.8c0-26.66 10.08-49.8 29.14-66.91c15.24-13.68 36.17-23.21 59-26.84c.06 0 .08 0 .09-.05c6.44-39 23.83-72.09 50.31-95.68A140.24 140.24 0 0 1 232 160c30.23 0 58.48 9.39 81.71 27.17a142.7 142.7 0 0 1 45.36 60.66c29.41 4.82 54.72 17.11 73.19 35.54C453 304.11 464 331.71 464 363.2c0 32.85-13.13 62.87-37 84.52c-22.89 20.82-53.8 32.28-87 32.28m41.5-260.11a169.2 169.2 0 0 1 45.44 19A96 96 0 0 0 281 129.33q-2.85 2-5.54 4.2a162.5 162.5 0 0 1 57.73 28.23a174.5 174.5 0 0 1 48.31 58.13M448 192h64v32h-64zM320 32h32v64h-32zm-64.65 97.63l12.45-12.45l-44.62-44.63l-22.63 22.63l33.17 33.17h.6a172 172 0 0 1 21.03 1.28m148.853-12.46l44.626-44.625l22.627 22.627l-44.625 44.626z" /></svg>
                                                        )}
                                                    <h5 className="text-2xl">{handleDays(el)}</h5>
                                                </div>
                                                <div className="weather-day-conditions w-max mx-auto h-max">
                                                    <h4>{el.conditions}</h4>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="card row-span-10">
                            <HourlyCharts />
                        </div>
                    </div>
                    <div className="card row-span-5 col-start-5 flex justify-center flex-col">
                        <div className="condition-title">
                            <h5 className="text-2xl">Condition</h5>
                        </div>
                        <div className="wind">
                            <div className="title text-white flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24" /><path d="M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24" /><path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24" /></svg>
                                <h5 className="text-xl">Wind Speed</h5>
                            </div>
                            <span className="text-xl">{data && data.currentConditions.windspeed}</span>
                        </div>
                        <div className="humidity">
                            <div className="title flex gap-2 text-white items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 12.003c.541 0 1.045 .273 1.342 .727l2.122 3.273a3.999 3.999 0 0 1 -6.035 5.063c-1.487 -1.248 -1.864 -3.382 -.867 -5.11l2.098 -3.226a1.6 1.6 0 0 1 1.34 -.727" /><path d="M18 12.003c.541 0 1.045 .273 1.342 .727l2.122 3.273a3.999 3.999 0 0 1 -6.035 5.063c-1.487 -1.248 -1.864 -3.382 -.867 -5.11l2.098 -3.227a1.6 1.6 0 0 1 1.34 -.726" /><path d="M12 2.003c.541 0 1.045 .273 1.342 .727l2.122 3.273a3.999 3.999 0 0 1 -6.035 5.063c-1.487 -1.248 -1.864 -3.382 -.867 -5.11l2.098 -3.226a1.6 1.6 0 0 1 1.34 -.727" /></svg>
                                <h5 className="text-xl">Humidity</h5>
                            </div>
                            <span className="text-xl">{data && data.currentConditions.humidity}</span>
                        </div>
                        <div className="feels-like">
                            <div className="title flex gap-2 text-white items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.8 10.946a1 1 0 0 0 -1.414 .014a2.5 2.5 0 0 1 -3.572 0a1 1 0 0 0 -1.428 1.4a4.5 4.5 0 0 0 6.428 0a1 1 0 0 0 -.014 -1.414zm-6.19 -5.286l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993zm6 0l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993z" /></svg>
                                <h5 className="text-xl">Feels Like</h5>
                            </div>
                            <span className="text-xl">{data && data.currentConditions.feelslike}</span>
                        </div>
                        <div className="cloud-cover">
                            <div className="title flex gap-2 text-white items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18.286 22C20.337 22 22 20.42 22 18.47c0-1.544-1.045-2.857-2.5-3.336C19.295 13.371 17.72 12 15.81 12c-2.052 0-3.715 1.58-3.715 3.53c0 .43.082.844.23 1.226a3 3 0 0 0-.54-.05C10.248 16.706 9 17.89 9 19.353S10.247 22 11.786 22z" /><path fill="currentColor" d="M21.551 14.55a5 5 0 0 0-.751-.486c-.66-2.101-2.686-3.564-4.99-3.564c-2.754 0-5.124 2.1-5.212 4.87c-1.321.37-2.41 1.342-2.867 2.63H6.286C3.919 18 2 16.104 2 13.765s1.919-4.236 4.286-4.236q.427.001.83.08a5.6 5.6 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015C20.392 7.78 22 9.881 22 12.353c0 .78-.16 1.522-.449 2.197" /></svg>
                                <h5 className="text-xl">Clouds</h5>
                            </div>
                            <span className="text-xl">{data && data.currentConditions.cloudcover}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards