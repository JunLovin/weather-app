import { useContext } from 'react'
import { UseWeatherApiContext } from '@context/UseWeatherApi.jsx'

function Header() {
    const { data } = useContext(UseWeatherApiContext)

    const handleGithub = () => {
        window.open('https://github.com/JunLovin', '+blank')
    }

    const handleCity = () => {
        window.open(`https://www.google.com/search?q=${data && data.resolvedAddress}`, '_blank')
    }

    return (
        <>
        <header className="w-full h-[90px] flex justify-between items-center max-[33.125rem]:justify-center">
            <button className="w-max h-max backdrop-blur-2xl bg-white/20 rounded-2xl p-2 text-white flex justify-center items-center gap-2 cursor-pointer" onClick={handleCity}>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" /></svg>
                <h2 className="pr-1 font-extrabold font-poppins text-2xl max-[33.125rem]:text-xl">{data && data.resolvedAddress}</h2>
            </button>
            <button className="text-white cursor-pointer w-max h-max max-[33.125rem]:hidden" onClick={handleGithub}>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="48"  height="48"  viewBox="0 0 24 24"  fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.04 4.305c2.195 -.667 4.615 -.224 6.36 1.176c1.386 1.108 2.188 2.686 2.252 4.34l.003 .212l.091 .003c2.3 .107 4.143 1.961 4.25 4.27l.004 .211c0 2.407 -1.885 4.372 -4.255 4.482l-.21 .005h-11.878l-.222 -.008c-2.94 -.11 -5.317 -2.399 -5.43 -5.263l-.005 -.216c0 -2.747 2.08 -5.01 4.784 -5.417l.114 -.016l.07 -.181c.663 -1.62 2.056 -2.906 3.829 -3.518l.244 -.08z" /></svg>
            </button>
        </header>
        </>
    )
}

export default Header;