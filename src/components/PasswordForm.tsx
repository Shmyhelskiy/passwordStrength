import React, { useState } from 'react';
import { checkPassword } from '../helpers/checkFunctions';


const PasswordForm: React.FC = () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false)
    const [strength, setStrength] = useState('');

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const passValue = event.target.value
        setPassword(passValue)
        
        setStrength(checkPassword(passValue)) 
        console.log(password.length);
        
        console.log(strength);
        
    }
    return (
        <div className='w-full flex flex-col'>
            <div className='w-full flex justify-center items-center mt-10'>
                <input
                    type={!showPassword ? 'password' : "text"}
                    className="border border-gray-300 p-2"
                    placeholder="Enter your password"
                    value={password}
                    onChange={handlePasswordChange}
                />

                <label className='flex justify-center items-center mr-2 ml-2'>Show password
                    <input type="checkbox" onClick={() => {setShowPassword(!showPassword)}} className='ml-2'/>
                </label>

                <button className='ml-5 hover:bg-green-500 p-2 border border-gray-300 rounded-xl' onClick={() => {setPassword('')}}> Clean</button>
            </div>


            <div className='flex flex-col justify-center items-center w-full mt-10'>
                <span>See result</span>
                <div className={`border border-gray-300 p-2 w-28 h-9 m-2 ${password.length === 0 ? `bg-white` : strength === `low` ? `bg-red-500` : strength === `easy` ? 'bg-red-500' : strength === `medium` ? 'bg-yellow-500' : 'bg-green-500' }`}></div>
                <div className={`border border-gray-300 p-2 w-28 h-9 m-2 ${password.length === 0 ? `bg-white` : strength === `low` ? `bg-red-500` : strength === `easy` ? 'bg-slate-500' : strength === `medium` ? 'bg-yellow-500' : 'bg-green-500'}`}></div>
                <div className={`border border-gray-300 p-2 w-28 h-9 m-2 ${password.length === 0 ? `bg-white` : strength === `low` ? `bg-red-500` : strength === `easy` ? 'bg-slate-500' : strength === `medium` ? 'bg-slate-500' : 'bg-green-500'}`}></div>
            </div>
        </div>
    );
};

export default PasswordForm;