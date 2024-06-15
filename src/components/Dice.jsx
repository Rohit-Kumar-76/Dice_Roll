import React, { useState } from 'react';
import '../App.css'; // Assuming you have a separate CSS file
import Alert from './Alert'; // Import the custom alert component

export const Dice = () => {
    const arrNumber = [1, 2, 3, 4, 5, 6];
    const [selectedNum, setSelectedNum] = useState(null);
    const [diceNumber, setDiceNumber] = useState(2);
    const [isSpinning, setIsSpinning] = useState(false);
    const [score, setScore] = useState(0);
    const [mistakeCount, setMistakeCount] = useState(0);
    const [showRules, setShowRules] = useState(false);
    const [alert, setAlert] = useState(null);

    const Numbers = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const rollDice = () => {
        if (!selectedNum) {
            setAlert({ message: 'Please select a number first.', type: 'error' });
            return;
        }

        setIsSpinning(true);
        let rollInterval = setInterval(() => {
            setDiceNumber(Numbers(1, 6));
        }, 100); // Change number every 100ms for a spinning effect

        setTimeout(() => {
            clearInterval(rollInterval);
            const newDiceNumber = Numbers(1, 6);
            setDiceNumber(newDiceNumber);
            setIsSpinning(false);

            // Check if the selected number matches the dice number
            if (selectedNum === newDiceNumber) {
                setScore(score + 6); // Assign score
                setMistakeCount(0); // Reset mistake count on correct guess
                setAlert({ message: 'Congratulations! You guessed the right number.', type: 'success' });
            } else {
                if (mistakeCount === 1) {
                    setScore(score - 2); // Deduct 2 from score on second mistake
                    setMistakeCount(0); // Reset mistake count
                    setAlert({ message: 'Wrong guess! Penalty of -2 points.', type: 'error' });
                } else {
                    setMistakeCount(mistakeCount + 1); // Increment mistake count
                    setAlert({ message: 'Wrong guess! Try again.', type: 'error' });
                }
            }
        }, 1000); // Duration of the spin animation
    }

    const resetGame = () => {
        setSelectedNum(null);
        setDiceNumber(1);
        setScore(0);
        setMistakeCount(0);
    }

    const toggleRules = () => {
        setShowRules(!showRules);
    }

    const closeAlert = () => {
        setAlert(null);
    }

    return (
        <main className='bg-gray-100 min-h-screen'>
            <div className='container mx-auto flex flex-col-reverse md:flex-row lg:flex-row justify-between items-center p-2 pt-8 md:pt-2 lg:pt-2'>
                <div className="border-2 border-black w-32 mx-2">
                    <h1 className="text-5xl text-black text-center font-bold">{score}</h1>
                    <p className="text-xl text-center font-bold">Total Score</p>
                </div>
                <div>
                    <div className='flex gap-1'>
                        {arrNumber.map((value, i) => {
                            const isSelected = value === selectedNum;
                            return (
                                <p
                                    key={i}
                                    onClick={() => setSelectedNum(value)}
                                    className={`w-10 h-10 text-2xl text-center border-2 border-black font-mono cursor-pointer ${isSelected ? 'bg-black text-white' : 'bg-white text-black'}`}
                                >
                                    {value}
                                </p>
                            );
                        })}
                    </div>
                    <p className='text-end p-2 text-xl font-bold'>Select Number</p>
                </div>
            </div>
            <div className='flex items-center justify-center flex-col py-20'>
                <div
                    onClick={rollDice}
                    className={`flex cursor-pointer items-center justify-center border-black bg-black rounded-md text-white w-28 h-28 p-2 border-4 font-bold text-4xl text-center ${isSpinning ? 'animate-spin' : ''}`}
                >
                    {diceNumber}
                </div>
                <p className='text-md text-green-700 font-bold p-1 pt-2'>Click on Dice to roll</p>
                <button onClick={resetGame} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded">Reset</button>
                <button onClick={toggleRules} className="mt-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">Game Rules</button>
                {showRules && (
                    <div className="mt-2 bg-gray-100 p-4 rounded">
                        <h2 className="text-lg font-bold mb-2">Game Rules</h2>
                        <p>1. Select a number from 1 to 6.</p>
                        <p>2. Click on the dice to roll.</p>
                        <p>3. Score points if your selected number matches the rolled number. +6  will be Rewarded.</p>
                        <p>4. Penalty of -2 points for two consecutive mistakes.</p>
                    </div>
                )}
                {alert && (
                    <Alert
                        message={alert.message}
                        type={alert.type}
                        onClose={closeAlert}
                    />
                )}
            </div>
        </main>
    );
};
