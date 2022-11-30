import React, { useEffect, useState } from 'react'
import { logoMoniqq } from '../../assets'
import { authApi } from '../../api'
import { useNavigate } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'

const Login = () => {
    useEffect(() => {
        document.title = "MONIQQ - Login";
        startOnMount()
    }, []);

    const navigate = useNavigate()
    const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setErrorMsg('')
    }, [username, password])

    const startOnMount = async () => {
        try {
            setLoading(true)
            const response = await authApi.whoami()
            console.log(response.data)
            if (response.data.role === "admin") {
                return navigate("/dashboardadmin")
            } else if (response.data.role === "isp") {
                return navigate("/dashboardisp")
            }
        } catch (err) {
            console.log("ERROR")
        }
        setLoading(false)
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const response = await authApi.login({ username, password })
            console.log(response.data)
            if (response.data.role === "admin") {
                return navigate("/dashboardadmin")
            } else if (response.data.role === "isp") {
                return navigate("/dashboardisp")
            }
            setUsername('')
            setPassword('')
        } catch (err) {
            console.log(err.response.data)
            setErrorMsg(err.response.data)
        }
        setLoading(false)
    }

    return (
        <div className="flex flex-col items-center justify-center bg-gray-50 h-screen dark:bg-gray-900 p-4">
            {
                loading ?

                <ClipLoader
                color={"#d2d2d2"}
                loading={loading}
                //cssOverride={override}
                size={120}
                aria-label="Loading Spinner"
                data-testid="loader"
                />
                
                :
            
            <div
                className=" w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
            >
                <div className=" flex flex-col items-center justify-center p-8 space-y-4 ">
                    <a
                        href="localhost:3000"
                        className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
                    >
                        <img className="h-5 mr-2" src={logoMoniqq} alt="logo" />
                    </a>
                    <div>
                        <h6
                            className="text-center text-xl font-bold mb-2 leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
                        >
                            Sign in
                        </h6>
                        <p
                            className="text-center text-xs font-light text-gray-500 dark:text-white"
                        >
                            Khusus untuk Admin dan Penyedia Jasa Internet
                        </p>
                        <p
                            className="text-center text-xs font-medium text-red-500 dark:text-red-500"
                        >
                            {errorMsg}
                        </p>
                    </div>
                    <form className="w-full space-y-4 md:space-y-6" action="#" onSubmit={handleLogin}>
                        <div>
                            <label
                                htmlFor="username"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >Username</label
                            >
                            <input
                                type="username"
                                name="username"
                                id="username"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="username"
                                required
                                autoComplete="off"
                                value={ username }
                                onChange={ (e) => setUsername(e.target.value) }
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >Password</label
                            >
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                                value={ password }
                                onChange={ (e) => setPassword(e.target.value) }
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
            }
        </div>
    )
}

export default Login