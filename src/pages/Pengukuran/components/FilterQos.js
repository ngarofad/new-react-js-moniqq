import React from 'react'
import { useState } from 'react'
import { qosApi } from '../../../api'
import ChartCardQos from './ChartCardQos';


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

const FilterQos = () => {
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [provider, setProvider] = useState("")
    const [service, setService] = useState("")
    const [location, setLocation] = useState("")
    const [parameter, setParameter] = useState("")
    const [recapFilteredQos, setRecapFilteredQos] = useState({})
    const [recapPerCustomer, setRecapPerCustomer] = useState([])
    const [loading, setLoading] = useState(false)

    const getRecapFilteredQos = async ({ qosParam, isp, city, service, startDate, endDate }) => {
        try {
            setLoading(true)
            const response = await qosApi.getRecapFilteredQos(
                { qosParam, isp, city, service, startDate, endDate }
            )
            if (response.data !== "empty") {
                setRecapFilteredQos(response.data)
                setRecapPerCustomer(response.data.recap_f_per_customer)
            } else if(response.data === "empty") {
                setRecapFilteredQos([])
                setRecapPerCustomer([])
            }

            console.log(response.data)
        } catch (err) {
            setRecapFilteredQos([])
            setRecapPerCustomer([])
        }
        
        setLoading(false)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (startDate.length !== 0 && endDate.length !== 0) {
            getRecapFilteredQos({ qosParam: parameter, isp: provider, city: location, service: service, startDate: startDate, endDate: endDate })
        }
    };


    return (
        <>
            {/* input filter */}
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-wrap mx-0 mb-2">
                        <div className='flex flex-col w-full md:w-1/2' >
                            <div className="w-full   py-2 pr-2 mb-1 md:mb-0">
                                <label
                                    htmlFor="parameter-qos"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >Parameter QoS</label
                                >
                                <select
                                    id="parameter-qos"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                    value={parameter}
                                    onChange={(e) => setParameter(e.target.value)}
                                >
                                    <option value="" disabled hidden>Pilih Parameter QoS</option>
                                    <option value={"throughput"}>Throughput</option>
                                    <option value={"delay"}>Delay</option>
                                    <option value={"jitter"}>Jitter</option>
                                    <option value={"packet loss"}>Packet Loss</option>
                                </select>
                            </div>
                            <div className="w-full   py-2 pr-2 mb-1 md:mb-0">
                                <label
                                    htmlFor="provider"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >ISP</label
                                >
                                <select
                                    id="provider"
                                    className="basics-select bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                    value={provider}
                                    onChange={(e) => setProvider(e.target.value)}
                                >
                                    <option value="" disabled hidden>Pilih ISP</option>
                                    <option value={"pt_l"}>PT_L</option>
                                    <option value={"pt_i"}>PT_I</option>
                                </select>
                            </div>
                            <div className="w-full  py-2 pr-2 mb-1 md:mb-0">
                                <label
                                    htmlFor="jenisproduk"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >Jenis Produk</label>
                                <select
                                    id="jenisproduk"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                    value={service}
                                    onChange={(e) => setService(e.target.value)}
                                >
                                    <option value="" disabled hidden>Pilih Jenis Produk</option>
                                    <option value={"Internet 10Mbps"}>Internet 10Mbps</option>
                                    <option value={"Internet 20Mbps"}>Internet 20Mbps</option>
                                    <option value={"Internet 30Mbps"}>Internet 30Mbps</option>
                                    <option value={"Internet 50Mbps"}>Internet 50Mbps</option>
                                    <option value={"Internet 100Mbps"}>Internet 100Mbps</option>
                                </select>
                            </div>

                        </div>
                        <div className='flex flex-col w-full md:w-1/2'>
                            <div className="w-full  py-2  mb-1 md:mb-0 ">
                                <label
                                    htmlFor="lokasi"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >Lokasi</label
                                >
                                <select
                                    id="lokasi"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                >
                                    <option value="" disabled hidden>Pilih Kota</option>
                                    <option value={"Yogyakarta"}>Yogyakarta</option>
                                    <option value={"Sleman"}>Sleman</option>
                                    <option value={"Semarang"}>Semarang</option>
                                </select>
                            </div>
                            <div className="w-full  py-2 mb-1 md:mb-0 ">
                                <label
                                    htmlFor="tanggalmulai"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Tanggal Mulai
                                </label>
                                <input
                                    type="date"
                                    id="tanggalmulai"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    max={endDate}
                                    min=""
                                    required
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                />
                            </div>
                            <div className="w-full  py-2 mb-1 md:mb-0 ">
                                <label
                                    htmlFor="tanggalakhir"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Tanggal Akhir
                                </label>
                                <input
                                    type="date"
                                    id="tanggalakhir"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    max=""
                                    min={startDate}
                                    required
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                />
                            </div>

                        </div>
                        <div className="w-full mb-6 mt-2">
                            <button
                                type="submit"
                                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Cari
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <ChartCardQos
                loading={loading} recapFilteredQos={recapFilteredQos}
                recapPerCustomer={recapPerCustomer}
            />
        </>
    )
}

export default FilterQos