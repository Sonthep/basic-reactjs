import { useState } from 'react';
const Colorizer = () => {
    const [color,setColor] = useState('#CB8D7F');
    const changeColor = () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        setColor("#" + randomColor)
    }
    return (
        <>
        <div className='container flex items-center justify-center h-screen flex-col gap-2'>
        <h1 className='font-bold text-[50px] mb-10'>Random Colors</h1>
        <div className="box rounded-md w-[20rem] h-[20rem] border-2" style={{backgroundColor: color}} ></div>
        <h1>{color}</h1>
            <button className="rounded-md border p-1 bg-blue-400 hover:bg-blue-700 text-white" 
            onClick={changeColor}  
            >Chang Color</button>
        </div>
        </>
    )
}

export default Colorizer