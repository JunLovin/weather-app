import { useState, useContext } from 'react'
import { UseWeatherApiContext } from '@context/UseWeatherApi'

function SearchInput() {
    const [input, setInput] = useState('')

    const { setCity, fetchData } = useContext(UseWeatherApiContext)

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter' && input.length > 0) {
            const text = input
            setCity(text)
            fetchData(text)
        }
    }

    return (
        <>
        <div className="input-container w-max h-max relative text-white">
        <input type="text" id="main-input" value={input} onChange={handleInput} onKeyDown={handleEnter} className="rounded-2xl w-[500px] h-[60px] outline-none backdrop-blur-2xl bg-white/10 font-semibold text-xl pr-12 pl-5" />
        <svg  xmlns="http://www.w3.org/2000/svg" className="absolute right-4 top-[1rem] cursor-pointer"  width="28"  height="28"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
        </div>
        </>
    )
}

export default SearchInput