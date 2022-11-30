import React from 'react'
import { useState } from 'react'
import { ispApi } from '../../../api'

const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}
function formatDate(date) {
    return [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
    ].join('-');
}
const kemarin = formatDate(yesterday);

const InputFilterTweetHome = ({ setFilteredTweet, setCardHasilSentimen, setSentimenSum, setSentimenDaily }) => {
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [provider, setProvider] = useState("")
    const [location, setLocation] = useState("")
    // const [hitungan, setHitungan] = useState("")
    const fetchTweets = async ({ provider, startDate, endDate, location }) => {
        const { data } = await ispApi.fetchTweetData({ provider, location, startDate, endDate })
        setFilteredTweet(data.tweets)
        console.log(data.tweets)
    }
    const fetchSentimen = async ({ provider, startDate, endDate, location }) => {
        const { data } = await ispApi.fetchSentimenData({ provider, location, startDate, endDate })
        setSentimenSum(data.sentimen_total)
        setSentimenDaily(data.sentimen_daily)
        console.log(data.sentimen_total)
        console.log(data.sentimen_daily)
        console.log(provider)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (startDate.length !== 0 && endDate.length !== 0) {
            fetchTweets({ provider, startDate, endDate, location });
            fetchSentimen({ provider, startDate, endDate, location });
            setCardHasilSentimen(true)
        }
    }


    return (
        <div className='border p-5 mb-4 rounded-xl'>
            <div className='text-base font-semibold flex justify-between items-center'>
                <div>
                    Filter
                </div>
            </div>
            <div>
                <form onSubmit={handleSubmit} >
                    <div className="flex flex-wrap mx-0 mb-2 justify-between">
                        <div className="w-full md:w-1/5 p-2 mb-1 md:mb-0">
                            <label
                                htmlFor="location-twt"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >Lokasi</label
                            >
                            <select
                                id="location-twt"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            // placeholder="asdasdas"
                            >
                                <option value="" disabled hidden>Pilih Lokasi</option>
                                <option value={"bebas"}>Bebas</option>
                                <option value={"jakarta"}>Jakarta</option>
                                <option value={"bandung"}>Bandung</option>
                                <option value={"semarang"}>Semarang</option>
                                <option value={"yogyakarta"}>Yogyakarta</option>
                                {/* <option value={"surabaya"}>Surabaya</option> */}

                            </select>
                        </div>

                        <div className="w-full md:w-1/5 p-2 mb-1 md:mb-0">
                            <label
                                htmlFor="isp-twt"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >ISP</label
                            >
                            <select
                                id="isp-twt"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                                value={provider}
                                onChange={(e) => setProvider(e.target.value)}
                                placeholder="asdasdas"
                            >
                                <option value="" disabled hidden>Pilih ISP</option>
                                <option value={"pt_i"}>PT_I</option>
                                <option value={"pt_b"}>PT_B</option>
                                <option value={"pt_f"}>PT_F</option>

                            </select>
                        </div>
                        <div className="w-full md:w-1/5 p-2 mb-1 md:mb-0">
                            <label
                                htmlFor="tanggalmulai-twt"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >Tanggal Mulai</label
                            >
                            <input
                                type="date"
                                id="tanggalmulai-twt"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                max={endDate}
                                min=""
                                required
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                            />
                        </div>
                        <div className="w-full md:w-1/5 p-2 mb-1 md:mb-0">
                            <label
                                htmlFor="tanggalakhir-twt"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >Tanggal Akhir</label
                            >
                            <input
                                type="date"
                                id="tanggalakhir-twt"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                                min={startDate}
                                max={kemarin}
                                required
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                            />
                        </div>
                        <div className="w-full md:w-1/5 p-2 mb-2 sm:mt-7 ">
                            <button
                                type="submit"
                                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Cari
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default InputFilterTweetHome