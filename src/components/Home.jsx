import React from 'react'
import dice from '../assets/dice.jpg'
import '../App.css'
export const Home = ({ toggle }) => {
    return (
        <div className='flex flex-col md:flex-row lg:flex-rwo justify-center items-center'>

            <div>
                <img className='p-4  w-full hover:scale-90' src={dice} alt="" />
            </div>
            <div>
                <h1 className='text-4xl md:text-5xl lg:text-8xl font-bold flex text-center  justify-center p-5 hover:scale-105'>ROLL THE DICE </h1>
                <button onClick={toggle} className=' mx-auto bg-black text-white p-2 px-12 font-bold rounded-md block  hover:bg-white hover:text-black border-2 border-black'>Play Now</button>
            </div>
        </div>
    )
}
