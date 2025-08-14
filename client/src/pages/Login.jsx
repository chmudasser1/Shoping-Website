import React, { useState } from 'react';
import { FaAmazon } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleSignin } from '../features/Data';
import { handleLoginin } from '../features/Data'; // Assuming you have a similar action for login
const Login = () => {
    const [isSignip, setIsSignip] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        reEnterPassword: '',
    });

    const [formData1, setFormData1] = useState({
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleChange1 = (e) => {
        const { name, value } = e.target;
        setFormData1({ ...formData1, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleSignin(formData));
        console.log('Form submitted:', formData);
    };
    const handleSubmit1 = (e) => {
        e.preventDefault();
        dispatch(handleLoginin(formData1)).then((action) => {
            if (action.type.endsWith('fulfilled')) {
                navigate('/');
            }
        });
        console.log('Form submitted:', formData1);
    };

    return (
        <div className='min-h-screen '>
            <div className='flex justify-center items-center  py-4'>
                <FaAmazon className='size-8 ' />
            </div>
            <div className="flex items-center justify-center ">
                {isSignip ? (
                    <div className="bg-white p-8 rounded-lg border-black border-[1px] w-96">
                        <h2 className="text-3xl font-semibold ">Create Account
                        </h2>
                        <div className='py-3 flex gap-2'>
                            <h1 className=''>Already a customer?</h1>
                            <p className='text-blue-400 hover:text-blue-600 cursor-pointer' onClick={() => setIsSignip(!isSignip)} >Sign in</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                                    Enter mobile number or email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                                    Your Name
                                </label>
                                <input
                                    type="name"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700" htmlFor="reEnterPassword">
                                    Re-enter Password
                                </label>
                                <input
                                    type="password"
                                    name="reEnterPassword"
                                    id="reEnterPassword"
                                    value={formData.reEnterPassword}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-yellow-400  py-1 rounded-2xl hover:bg-yellow-600 transition duration-200">
                                Verify email
                            </button>
                        </form>
                    </div>
                )
                    :
                    (
                        <div className="bg-white p-8 rounded-lg border-black border-[1px] w-96">
                            <h2 className="text-2xl font-semibold ">Sign in or create account
                            </h2>
                            <form onSubmit={handleSubmit1}>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 py-3" htmlFor="email">
                                        Enter email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData1.email}
                                        onChange={handleChange1}
                                        required
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-yellow-400  py-1 rounded-2xl hover:bg-yellow-600 transition duration-200">
                                    Continue
                                </button>
                                <button
                                    type="button"
                                    className="w-full my-2 bg-yellow-400  py-1 rounded-2xl hover:bg-yellow-600 transition duration-200" onClick={() => setIsSignip(!isSignip)}>
                                    Signup
                                </button>
                            </form>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Login;
