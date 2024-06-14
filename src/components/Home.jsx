import React from 'react'
import dice from '../assets/dice.jpg'
import '../App.css'
export const Home = ({ toggle }) => {
    return (
        <div className='flex justify-center items-center'>

            <img className='p-4  w-88 hover:scale-90' src={dice} alt="" />
            <div>
                <h1 className='text-8xl font-bold flex  justify-center p-5 hover:scale-105'>DICE GAME</h1>
                <button onClick={toggle} className='bg-black text-white p-2 px-10 font-bold rounded-md block mx-auto hover:bg-white hover:text-black border-2 border-black'>Play Now</button>
            </div>
        </div>
    )
}
