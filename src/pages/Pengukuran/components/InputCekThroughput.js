import React from 'react'
import { useState } from 'react'
const InputCekThroughput = ({ setAngkaStandarThroughput }) => {
    const [nilaiThroughput, setNilaiThroughput] = useState();
    const [nilaiBandwidth, setNilaiBandwidth] = useState();
    const handleInputThroghput = (e) => {
        e.preventDefault();
        let aa = (Number(nilaiThroughput) / Number(nilaiBandwidth)) * 100
        setAngkaStandarThroughput = (aa);
    };

    return (

        <div>
            <form onSubmit={handleInputThroghput} >
                <div className="flex flex-wrap mx-0 mb-2 justify-between">
                    <div className="w-full md:w-1/3 p-2 mb-1 md:mb-0">
                        <div>
                            <label htmlFor="bandwidth"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Bandwidth
                            </label>
                            <input type="text" id="bandwidth"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Contoh: 20.00"
                                value={nilaiBandwidth}
                                onChange={(e) => setNilaiBandwidth(e.target.value)}
                                required />
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-2 mb-1 md:mb-0">
                        <div>
                            <label htmlFor="throughput"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Throughput
                            </label>
                            <input type="text" id="throughput"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Contoh: 13.9"
                                value={nilaiThroughput}
                                onChange={(e) => setNilaiThroughput(e.target.value)}
                                required />
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 p-2  sm:mt-7 ">
                        <button
                            type="submit"
                            className="
                        w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                         focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
                         dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
                        "
                        >
                            Cek
                        </button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default InputCekThroughput