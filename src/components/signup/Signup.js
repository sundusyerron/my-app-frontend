import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from '../../img/meme-background.jpg';

function Register() {
    const [fname, setFirstname] = useState("");
    const [lname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleFnameChange = (e) => {
        setFirstname(() => e.target.value);
    }
    const handleLnameChange = (e) => {
        setLastname(() => e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(() => e.target.value);
    }
    const handlePassChange = (e) => {
        setPassword(() => e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (fname === "" && lname === "" && email === "" && password === "")
            alert("Please make sure all of the fields are entered");
        else {
            alert("Signup successful");
            navigate("/");
        }
    }

    return (
        <>
            <h3 className="text-center text-3xl subpixel-antialiased font-bold tracking-wider text-orange-800 mt-4">Signup</h3>
            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md mt-28">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        <div class="form-group mb-6">
                            <input type="text" value={fname} onChange={handleFnameChange} className="form-control
                                block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                aria-describedby="emailHelp123" placeholder="First name"
                            />

                        </div>
                        <div className="form-group mb-6">
                            <input type="text" value={lname} onChange={handleLnameChange} className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                                border border-solid border-gray-300 rounded
                                transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124" aria-describedby="emailHelp124" placeholder="Last name"
                            />
                        </div>
                    </div>
                    <div className="form-group mb-6">
                        <input type="email" value={email} onChange={handleEmailChange} className="form-control block w-full px-3 py-1.5
                            text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded
                            transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125" placeholder="Email address"
                        />
                    </div>
                    <div className="form-group mb-6">
                        <input type="password" value={password} onChange={handlePassChange} className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                            border border-solid border-gray-300 rounded
                            transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126" placeholder="Password"
                        />
                    </div>
                    <div className="form-group form-check text-center mb-6">
                        <input type="checkbox"
                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                            id="exampleCheck25" checked />
                        <label className="form-check-label inline-block text-gray-800" for="exampleCheck25">Subscribe to our newsletter</label>
                    </div>
                    <button type="submit" className=" w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded
                        shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg
                        transition duration-150 ease-in-out">
                        Sign up
                    </button>
                </form>
            </div>
        </>
    );
}

function Login({changeMembership}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(() => e.target.value);
    }

    const handlePassChange = (e) => {
        setPassword(() => e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(email === "" && password === "")
            alert ("Please enter necessary details");
        else {
            alert("Login successful");
            navigate("/");
        }
    }

    return (
        <>
            <h3 className="text-center text-3xl subpixel-antialiased font-bold tracking-wider text-orange-800 mt-4">Login</h3>
            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mt-28">
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-6">
                        <label for="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">Email address</label>
                        <input type="email" onChange={handleEmailChange} className="form-control
                            block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out
                            m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email"
                        />
                    </div>
                    <div className="form-group mb-6">
                        <label for="exampleInputPassword2" className="form-label inline-block mb-2 text-gray-700">Password</label>
                        <input type="password" onChange={handlePassChange} className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded
                            transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword2" placeholder="Password"
                        />
                    </div>
                    <div className="flex justify-between items-center mb-6">
                        <div className="form-group form-check">
                            <input type="checkbox"
                                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                id="exampleCheck2" />
                            <label className="form-check-label inline-block text-gray-800" for="exampleCheck2">Remember me</label>
                        </div>

                        <a href="#!"
                            className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Forgot
                            password?</a>
                    </div>
                    <button type="submit" className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded
                        shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg
                        transition duration-150 ease-in-out">
                        Sign in
                    </button>
                    <p className="text-gray-800 mt-6 text-center font-sans">Not a member? <button
                        className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out" onClick={changeMembership}>Register</button>
                    </p>
                </form>
            </div>
        </>
    );
}

function Signup() {
    const [isMember, setMembership] = useState(true);
    const changeMembership = () => {
        setMembership(!isMember);
    }
    return (
        <div style={{ backgroundImage: `url(${bg})`}} className="h-screen bg-cover bg-center md:bg-cover md:bg-center sm:bg-cover sm:bg-center flex flex-col items-center justify-center">
            {/**Conditionally render the components based on user membership */}
            {isMember ? <Login changeMembership={changeMembership} /> : <Register />}
        </div>
    );
}

export default Signup;