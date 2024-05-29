import React, { useState } from "react";
import axios from 'axios';

import loginImg from './assets/login.jpg'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`http://${import.meta.env.VITE_BACKEND_API}/api/ceo/auth`, { user_id: email, password:password });
            const token = response.data.token;
            console.log("Login successful. Token:", token);
            alert(response.data.token)
            // You might want to handle storing the token in state or a global state management solution here.
        } catch (error) {
            console.error("Login failed. Error:", error.response.data.message);
        }
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={loginImg} alt="" />
        </div>

        <div className='bg-gray-800 flex flex-col justify-center rounded-20px'>
            <form className='max-w-[400px] w-full mx-auto rounded-[27px] bg-gray-900 p-8 px-8'>
                <h2 className='text-4xl dark:text-white font-bold text-center'>SIGN IN</h2>
                <div className='flex flex-col text-gray-300 py-2'>
                    <label>Username</label>
                    <input className='rounded-[10px] bg-gray-600 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className='flex flex-col text-gray-300 py-2'>
                    <label>Password</label>
                    <input className='p-2 rounded-[10px] bg-gray-600 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <div className='flex justify-between text-gray-400 py-2'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                    <p>Forgot Password</p>
                </div>
                <button className='w-full my-5 py-2 bg-black-400 shadow-lg shadow-black-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg' onClick={(e)=>handleSubmit(e)}>SIGNIN</button>
                
            </form>
        </div>
    </div>

    );
}

export default Login;
