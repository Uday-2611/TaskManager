import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = (e) => {
        e.preventDefault()

        handleLogin(email, password)

        setEmail('')
        setPassword('')
    }

    return (
        <div className='flex flex-col h-screen w-screen justify-center items-center'>
            <h1 className='text-[60px] mb-10 font-semibold font-mono text-emerald-600'>Task Manager✅</h1>
            <div className='border-2 border-emerald-600 p-20 rounded-xl  '>
                <form
                    onSubmit={(e) => {
                        submitHandler(e);
                    }} className='flex flex-col items-center justify-center '>
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        required
                        className='border-2 border-emerald-600 rounded-full py-3 px-5 text-xl text-white outline-none bg-transparent' type="email" placeholder='Enter your email' />
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required
                        className='border-2 border-emerald-600 rounded-full mt-3 py-3 px-5 text-xl text-white outline-none bg-transparent' type="password" placeholder='Enter you password' />
                    <button
                        className='border-none rounded-full py-3 px-5 text-xl text-white outline-none bg-emerald-600  mt-5 hover:bg-emerald-700 w-full'>Log In</button>
                </form>
            </div>
        </div>
    )
}

export default Login
