import React from 'react'

const SentimenSumCard = ({ sentimenSum }) => {
    return (
        <div>
            <div className="flex flex-wrap mx-0 ">
                <div className="w-full p-3 md:w-1/3 mb-2 md:mb-0">
                    <div className='border p-4 rounded-lg flex flex-row w-full'>
                        <div className="flex w-1/4  items-center justify-center">
                            <svg
                                className="w-12 h-12"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="white"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="blue"

                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                                />
                            </svg>
                        </div>
                        <div className="flex flex-col w-3/4 ">
                            <h6
                                className="mb-0 ml-4 text-md text-black lg dark:text-gray-400"
                            >
                                Total <i>Tweet</i>
                            </h6>
                            <p
                                className="mb-0 ml-4 text-2xl font-semibold text-black  dark:text-gray-400"
                            >
                                {sentimenSum.sentimen_all_total}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full p-3 md:w-1/3  mb-2 md:mb-0">
                    <div className='border p-4 rounded-lg flex flex-row w-full'>
                        <div className="flex w-1/4  items-center justify-center">
                            <svg
                                className="w-12 h-12"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="white"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="green"

                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                                />
                            </svg>
                        </div>
                        <div className="flex flex-col w-3/4 ">
                            <h6
                                className="mb-0 ml-4 text-md text-black dark:text-gray-400"
                            >
                                <i>Tweet</i>  Positif
                            </h6>
                            <p
                                className="mb-0 ml-4 text-2xl font-semibold text-black  dark:text-gray-400"
                            >
                                {sentimenSum.sentimen_pos_total}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full p-3 md:w-1/3  mb-2 md:mb-0">
                    <div className='border p-4 rounded-lg flex flex-row w-full'>
                        <div className="flex w-1/4  items-center justify-center">
                            <svg
                                className="w-12 h-12"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="white"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="red"

                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                                />
                            </svg>
                        </div>
                        <div className="flex flex-col w-3/4 ">
                            <h6
                                className="mb-0 ml-4 text-md text-black dark:text-gray-400"
                            >
                                <i>Tweet</i> Negatif
                            </h6>
                            <p
                                className="mb-0 ml-4 text-2xl font-semibold text-black  dark:text-gray-400"
                            >
                                {sentimenSum.sentimen_neg_total}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SentimenSumCard