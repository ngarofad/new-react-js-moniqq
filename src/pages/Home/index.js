import React, { useEffect } from 'react'
import { imageHeroSection, logoMoniqq, logoLifeMedia, logoIndiHome, logoMyRepublic, logoFirstMedia, logoBiznet } from '../../assets'
import { Link } from 'react-router-dom'
import { Navbar, Button } from 'flowbite-react'
const Home = () => {
    // untuk ubah title
    useEffect(() => {
        document.title = "Home - MONIQQ";
    }, []);

    return (
        <div className="flex flex-col div h-screen justify-between">

            <header className="container p-0">
                <Navbar
                    fluid={true}
                    rounded={true}
                    className="dark:bg-gray-900"

                >
                    <div>
                        <Link to="/">
                            <img
                                src={logoMoniqq}
                                className="mr-3 h-5 w-24 "
                                alt="Flowbite Logo"
                            />
                        </Link>
                    </div>
                    <div className="flex md:order-2">
                        <Link to="/login">
                            <Button>
                                Login
                            </Button>
                        </Link>
                        <Navbar.Toggle />
                    </div>
                    <Navbar.Collapse>
                        <ul
                            className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
                        >
                            <Link to='/'>
                                <li>
                                    <div
                                        className="block py-2 pr-4 pl-3 text-blue-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                        aria-current="page"
                                    >Home
                                    </div>
                                </li>
                            </Link>
                            <Link to='/belajarqos'>
                                <li>
                                    <div
                                        className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                        aria-current="page"
                                    >Belajar
                                    </div>
                                </li>
                            </Link>
                            <Link to='/pengukuran'>
                                <li>
                                    <div
                                        className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                        aria-current="page"
                                    >Pengukuran
                                    </div>
                                </li>
                            </Link>
                        </ul>
                    </Navbar.Collapse>
                </Navbar>

            </header>


            <section className="relative">
                <div
                    className="container flex flex-col-reverse lg:flex-row items-center gap-12 my-14"
                >

                    <div className="flex flex-1 flex-col items-center lg:items-start">
                        <h1
                            className="text-4xl font-bold md:text-7xl text-center lg:text-left mb-6 "
                        >
                            Mengenal Internet Lebih Dalam
                        </h1>
                        <p className="text-lg font-light text-center lg:text-left mb-6 leading-relaxed">
                            Gunakan situs ini untuk memahami kualitas koneksi dalam jaringan
                            internet serta bagaimana hal tersebut mempengaruhi pengalaman
                            <i> browsing</i>,<i> gaming</i>, dan <i> streaming</i> Anda.
                        </p>

                        <Link to="/belajarqos">
                            <div
                                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                            >
                                Belajar Sekarang
                                <svg
                                    className="ml-2 -mr-1 w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                        </Link>
                    </div>

                    <div
                        className="flex flex-1 flex-col justify-center items-center my-8 "
                    >
                        <img
                            className="w-5/6 h-5/6 animate-bounce "
                            src={imageHeroSection}
                            alt=""
                        />
                    </div>
                </div>
            </section>

            {/* <section className='container'>
                <div
                    className=" container lg:p-20 mt-6 overflow-hidden p-12 relative"
                >
                    <div className="flex animate absolute left-0">
                        <div className="flex w-1/2 justify-around items-center logo">
                            <a href="https://lifemedia.id/"><img src={logoLifeMedia} alt="logo"></img></a>
                            <a href="https://indihome.co.id/"><img src={logoIndiHome} alt="logo"></img></a>
                            <a href="https://biznethome.net/"><img src={logoBiznet} alt="logo"></img></a>
                            <a href="https://www.firstmedia.com/" ><img src={logoFirstMedia} alt="logo"></img></a>
                            <a href="https://myrepublic.co.id/" ><img src={logoMyRepublic} alt="logo"></img></a>
                        </div>
                        <div className="flex w-1/2 justify-around items-center logo">
                            <a href="https://lifemedia.id/"><img src={logoLifeMedia} alt="logo"></img></a>
                            <a href="https://indihome.co.id/"><img src={logoIndiHome} alt="logo"></img></a>
                            <a href="https://biznethome.net/"><img src={logoBiznet} alt="logo"></img></a>
                            <a href="https://www.firstmedia.com/" ><img src={logoFirstMedia} alt="logo"></img></a>
                            <a href="https://myrepublic.co.id/" ><img src={logoMyRepublic} alt="logo"></img></a>
                        </div>
                    </div>
                </div>
            </section> */}


            <footer
                className="container p-4 bg-white rounded-lg md:px-6 md:py-8 dark:bg-gray-900"
            >

                <span
                    className="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
                >© 2022 <a href="localhost:3000" className="hover:underline">MONIQQ</a>. All Rights
                    Reserved.
                </span>
            </footer>

        </div>
    )
}

export default Home