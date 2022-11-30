import { Table } from 'flowbite-react';
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const CekQoS = () => {

    // throughput
    const [th, setTh] = useState();
    const [bw, setBw] = useState();
    const [hasilTh, setHasilTh] = useState();
    const [infoTh, setInfoTh] = useState();

    const [cardHasilTh, setCardHasilTh] = useState(false);
    const [batasanTh, setBatasanTh] = useState("");
    const handleThroughput = (e) => {
        e.preventDefault();
        let valTh = (
            (Number(th) / Number(bw)) * 100
        );
        if (bw === 0) {
            setInfoTh("Tolong isi lagi. Bandwidth tidak bisa 0")
        } else {
            if (valTh === 0) {
                setInfoTh("Tolong Masukkan Angka Hasil Pengukuran dengan benar");
                setBatasanTh("XXXX")

                // Nilai Throughput: { infoTh } { hasilTh }% ({ batasanTh })
            } else if (valTh === Infinity) {
                setInfoTh("XXXX----Tolong Masukkan Angka Hasil Pengukuran dengan benar----XXXX");
                setBatasanTh("XXX")
            } else if (valTh > 0 && valTh <= 25) {
                setInfoTh("Buruk");
                setBatasanTh("0% < x <= 25%")
            } else if (valTh > 25 && valTh <= 50) {
                setInfoTh("Sedang");
                setBatasanTh("25% < x <= 50%")
            } else if (valTh > 50 && valTh <= 75) {
                setInfoTh("Bagus");
                setBatasanTh("50% < x <= 75%")
            } else if (valTh > 75) {
                setInfoTh("Sangat Bagus");
                setBatasanTh("> 75%")
            }
            else {
                setInfoTh("Tolong Masukkan Angka Hasil Pengukuran dengan benar");
                setBatasanTh("XXXX")
            }
        }
        if (valTh >= 100) {
            let valThNormalized = valTh.toFixed(0)
            setHasilTh(valThNormalized);
        } else if (valTh < 100) {
            let valThNormalized = valTh.toFixed(2);
            setHasilTh(valThNormalized);
        }

        setCardHasilTh(true)
    };

    // delay
    const [delay, setDelay] = useState();

    const [infoDelay, setInfoDelay] = useState();
    const [cardHasilDelay, setCardHasilDelay] = useState(false);
    const [batasanDelay, setBatasanDelay] = useState("");
    const handleDelay = (e) => {
        e.preventDefault();
        let valDelay = delay

        if (valDelay < 150) {
            setInfoDelay("Sangat Bagus");
            setBatasanDelay("< 150ms")
        } else if (valDelay > 150 && valDelay <= 300) {
            setInfoDelay("Bagus");
            setBatasanDelay("150ms < x <= 300ms")
        } else if (valDelay > 300 && valDelay <= 450) {
            setInfoDelay("Sedang");
            setBatasanDelay("300ms < x <= 450ms")
        } else if (valDelay > 450) {
            setInfoDelay("Buruk");
            setBatasanDelay("> 450ms")
        }
        else {
            setInfoDelay("Tolong Masukkan Angka Hasil Pengukuran dengan benar");
            setBatasanDelay("XXXX")
        }

        setCardHasilDelay(true)

    };

    // Jitter
    const [jitter, setJitter] = useState();
    const [infoJitter, setInfoJitter] = useState();
    const [cardHasilJitter, setCardHasilJitter] = useState(false);
    const [batasanJitter, setBatasanJitter] = useState("");
    const handleJitter = (e) => {
        e.preventDefault();
        let valJitter = jitter

        if (valJitter <= 0) {
            setInfoJitter("Sangat Bagus");
            setBatasanJitter("0ms")
        } else if (valJitter > 0 && valJitter <= 75) {
            setInfoJitter("Bagus");
            setBatasanJitter("0ms < x <= 75ms")
        } else if (valJitter > 75 && valJitter <= 225) {
            setInfoJitter("Sedang");
            setBatasanJitter("75ms < x <= 225ms")
        } else if (valJitter > 125) {
            setInfoJitter("Buruk");
            setBatasanJitter("> 125ms")
        }
        else {
            setInfoJitter("Tolong Masukkan Angka Hasil Pengukuran dengan benar");
            setBatasanJitter("XXXX")
        }

        setCardHasilJitter(true)

    };

    // PacketLoss
    const [packetloss, setPacketloss] = useState();

    const [infoPacketloss, setInfoPacketloss] = useState();
    const [cardHasilPacketloss, setCardHasilPacketloss] = useState(false);
    const [batasanPacketloss, setBatasanPacketloss] = useState("");
    const handlePacketloss = (e) => {
        e.preventDefault();
        let valPacketloss = packetloss

        if (valPacketloss <= 0) {
            setInfoPacketloss("Sangat Bagus");
            setBatasanPacketloss("0%")
        } else if (valPacketloss > 0 && valPacketloss <= 3) {
            setInfoPacketloss("Bagus");
            setBatasanPacketloss("0% < x <= 3%")
        } else if (valPacketloss > 3 && valPacketloss <= 15) {
            setInfoPacketloss("Sedang");
            setBatasanPacketloss("3% < x <= 15%")
        } else if (valPacketloss > 15) {
            setInfoPacketloss("Buruk");
            setBatasanPacketloss("> 15%")
        }
        else {
            setInfoPacketloss("Tolong Masukkan Angka Hasil Pengukuran dengan benar");
            setBatasanPacketloss("XXXX")
        }

        setCardHasilPacketloss(true)

    };

    return (
        <div className='mn-20'>
            {/* throughput */}
            <div className='p-5 my-8 border rounded-xl'>
                <div className='my-2 p-2 flex flex-col '>
                    <div className='text-base font-bold'>
                        Standar <i>Throughput</i>
                    </div>
                    <div className='mt-4 text-sm text-gray-600'>
                        Masukkan besar <i>Bandwidth</i> yang Anda langgan dan hasil pengukuran <i>Throughput</i> tanpa satuan Mbps/MBps.
                    </div>
                </div>
                {/* input throughput */}
                <div>
                    <form onSubmit={handleThroughput} >
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
                                        onChange={(e) => setBw(e.target.value)}
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
                                        onChange={(e) => setTh(e.target.value)}
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
                {/* hasil throughput */}
                {
                    cardHasilTh
                    &&
                    <div className='p-2 flex w-full flex-col'>
                        <div className='font-semibold mb-4'>
                            Hasil
                        </div>
                        <div className="border rounded-xl p-2 flex flex-wrap flex-col md:flex-row w-full mx-0 mb-2 justify-between">
                            <div className="w-full  p-2 mb-1  md:mb-0">
                                <div className='w-full flex flex-row p-2 '>
                                    <div className='w-1/2 font-medium text-sm'>
                                        Kategori
                                    </div>
                                    <div className='w-1/2 '>

                                        <div className={
                                            infoTh !== 'Sangat Bagus' ?
                                                infoTh !== 'Bagus' ?
                                                    infoTh !== 'Sedang' ?
                                                        infoTh !== 'Buruk' ?
                                                            'w-full text-white bg-neutral-700 hover:bg-neutral-800 focus:ring-4 focus:outline-none :ring-neutral-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-neutral-800'
                                                            : 'w-full text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none :ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800'
                                                        : 'w-full text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none :ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800'
                                                    : 'w-full text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none :ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800'
                                                : 'w-full text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none :ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800'
                                        }
                                        >
                                            {infoTh}

                                        </div>
                                    </div>
                                </div>

                                <div className='w-full flex flex-row p-2 '>
                                    <div className='w-1/2 font-medium text-sm'>
                                        Nilai <i>Throughput</i>
                                    </div>
                                    <div className='w-1/2 '>
                                        : <b>{hasilTh} %</b>
                                    </div>
                                </div>

                                <div className='w-full  flex flex-row p-2 '>
                                    <div className='w-1/2 font-medium text-sm'>
                                        Batasan Standar
                                    </div>
                                    <div className='w-1/2 '>
                                        : {batasanTh}
                                    </div>
                                </div>
                            </div>
                            {/* tabel */}
                            <div className='w-full p-4'>
                                <div className='flex w-full flex-row justify-center items-center'>
                                    <span className='text-sm font-medium p-3'>Tabel Standar  <i> Throughput</i><span className='text-xs'><sup >[1]</sup></span></span>
                                </div>
                                <div className="w-full md:w-full p-2 mb-1 ">
                                    <div className='flex justify-center overflow-hidden'>
                                        <Table hoverable={true}>
                                            <Table.Head>
                                                <Table.HeadCell>
                                                    Nilai
                                                </Table.HeadCell>
                                                <Table.HeadCell>
                                                    Indeks
                                                </Table.HeadCell>
                                                <Table.HeadCell>
                                                    Kategori
                                                </Table.HeadCell>

                                            </Table.Head>
                                            <Table.Body className="divide-y">
                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                        75% &#60; x &le; 100%
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        4
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        Sangat Bagus
                                                    </Table.Cell>
                                                </Table.Row>
                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                        50% &#60; x &le; 75%
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        3
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        Bagus
                                                    </Table.Cell>
                                                </Table.Row>
                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                        25% &#60; x &le; 50%
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        2
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        Sedang
                                                    </Table.Cell>
                                                </Table.Row>
                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                        &#60;25%
                                                    </Table.Cell>
                                                    {/* <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            &#60;25%&#62; &ge; &le;
                                        </Table.Cell> */}
                                                    <Table.Cell>
                                                        1
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        Buruk
                                                    </Table.Cell>
                                                </Table.Row>
                                            </Table.Body>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-4 text-sm text-gray-600'>
                            Silakan menuju halaman
                            <Link to="/belajarqos/throughput" className='text-blue-800 hover:text-blue-500 underline'>
                                <span> Belajar Throughput</span>
                            </Link>
                            , jika ingin mencari tahu lebih lanjut.
                        </div>
                    </div>
                }
            </div>

            {/* delay */}
            <div className='p-5 my-8 border rounded-xl'>
                <div className='my-2 p-2 flex flex-col '>
                    <div className='text-base font-bold'>
                        Standar <i>Delay</i>
                    </div>
                    <div className='mt-4 text-sm text-gray-600'>
                        Masukkan nilai hasil pengukuran <i>Delay</i> tanpa satuan milliseconds (ms).
                    </div>
                </div>
                {/* input delay */}
                <div>
                    <form onSubmit={handleDelay} >
                        <div className="flex flex-wrap mx-0 mb-2">
                            <div className="w-full md:w-1/3 p-2 mb-1 md:mb-0">
                                <div>
                                    <label htmlFor="delay"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Delay
                                    </label>
                                    <input type="text" id="delay"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Contoh: 3"
                                        onChange={(e) => setDelay(e.target.value)}
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
                {/* hasil Delay */}
                {
                    cardHasilDelay
                    &&
                    <div className='p-2'>

                        <div className='font-semibold mb-4'>
                            Hasil
                        </div>
                        <div className="border rounded-xl p-2 flex flex-wrap flex-col md:flex-row w-full mx-0 mb-2 justify-between">
                            <div className="w-full  p-2 mb-1  md:mb-0">
                                <div className='w-full flex flex-row p-2 '>
                                    <div className='w-1/2 font-medium text-sm'>
                                        Kategori
                                    </div>
                                    <div className='w-1/2 '>

                                        <div className={
                                            infoDelay !== 'Sangat Bagus' ?
                                                infoDelay !== 'Bagus' ?
                                                    infoDelay !== 'Sedang' ?
                                                        infoDelay !== 'Buruk' ?
                                                            'w-full text-white bg-neutral-700 hover:bg-neutral-800 focus:ring-4 focus:outline-none :ring-neutral-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-neutral-800'
                                                            : 'w-full text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none :ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800'
                                                        : 'w-full text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none :ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800'
                                                    : 'w-full text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none :ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800'
                                                : 'w-full text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none :ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800'
                                        }
                                        >
                                            {infoDelay}

                                        </div>
                                    </div>
                                </div>

                                <div className='w-full flex flex-row p-2 '>
                                    <div className='w-1/2 font-medium text-sm'>
                                        Nilai <i>Delay</i>
                                    </div>
                                    <div className='w-1/2 '>
                                        : <b>{delay}ms</b>
                                    </div>
                                </div>

                                <div className='w-full  flex flex-row p-2 '>
                                    <div className='w-1/2 font-medium text-sm'>
                                        Batasan Standar
                                    </div>
                                    <div className='w-1/2 '>
                                        : {batasanDelay}
                                    </div>
                                </div>
                            </div>
                            {/* tabel */}
                            <div className='w-full p-4'>
                                <div className='flex w-full flex-row justify-center items-center'>
                                    <span className=' text-sm font-medium p-3'>Tabel Standar <i>Delay</i><span className='text-xs'><sup >[1]</sup></span> </span>
                                </div>
                                <div className="w-full md:w-full p-2 mb-1 ">
                                    <div className='flex justify-center overflow-hidden'>
                                        <Table hoverable={true}>
                                            <Table.Head>
                                                <Table.HeadCell>
                                                    Nilai
                                                </Table.HeadCell>
                                                <Table.HeadCell>
                                                    Indeks
                                                </Table.HeadCell>
                                                <Table.HeadCell>
                                                    Kategori
                                                </Table.HeadCell>

                                            </Table.Head>
                                            <Table.Body className="divide-y">
                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                        &#60; 150ms
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        4
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        Sangat Bagus
                                                    </Table.Cell>
                                                </Table.Row>
                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                        150ms &#60; x &le; 300ms
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        3
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        Bagus
                                                    </Table.Cell>
                                                </Table.Row>
                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                        300ms &#60; x &le; 450ms
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        2
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        Sedang
                                                    </Table.Cell>
                                                </Table.Row>
                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                        &#62;450ms
                                                    </Table.Cell>
                                                    {/* <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            &#60;25%&#62; &ge; &le;
                                        </Table.Cell> */}
                                                    <Table.Cell>
                                                        1
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        Buruk
                                                    </Table.Cell>
                                                </Table.Row>
                                            </Table.Body>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-4 text-sm text-gray-600'>
                            Silakan menuju halaman
                            <Link to="/belajarqos/delay" className='text-blue-800 hover:text-blue-500 underline'>
                                <span> Belajar Delay</span>
                            </Link>
                            , jika ingin mencari tahu lebih lanjut.
                        </div>
                    </div>

                }
            </div>

            {/* Jitter */}
            <div className='p-5 my-8 border rounded-xl'>
                <div className='my-2 p-2 flex flex-col '>
                    <div className='text-base font-bold'>
                        Standar <i>Jitter</i>
                    </div>
                    <div className='mt-4 text-sm text-gray-600'>
                        Masukkan nilai hasil pengukuran <i>Jitter</i> tanpa satuan milliseconds (ms).
                    </div>
                </div>
                {/* input Jitter */}
                <div>
                    <form onSubmit={handleJitter} >
                        <div className="flex flex-wrap mx-0 mb-2">
                            <div className="w-full md:w-1/3 p-2 mb-1 md:mb-0">
                                <div>
                                    <label htmlFor="jitter"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Jitter
                                    </label>
                                    <input type="text" id="jitter"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Contoh: 3"
                                        onChange={(e) => setJitter(e.target.value)}
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
                {/* hasil Jitter */}
                {
                    cardHasilJitter
                    &&
                    <div className='p-2'>

                        <div className='font-semibold mb-4'>
                            Hasil
                        </div>
                        <div className="border rounded-xl p-2 flex flex-wrap flex-col md:flex-row w-full mx-0 mb-2 justify-between">
                            <div className="w-full  p-2 mb-1  md:mb-0">
                                <div className='w-full flex flex-row p-2 '>
                                    <div className='w-1/2 font-medium text-sm'>
                                        Kategori
                                    </div>
                                    <div className='w-1/2 '>

                                        <div className={
                                            infoJitter !== 'Sangat Bagus' ?
                                                infoJitter !== 'Bagus' ?
                                                    infoJitter !== 'Sedang' ?
                                                        infoJitter !== 'Buruk' ?
                                                            'w-full text-white bg-neutral-700 hover:bg-neutral-800 focus:ring-4 focus:outline-none :ring-neutral-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-neutral-800'
                                                            : 'w-full text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none :ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800'
                                                        : 'w-full text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none :ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800'
                                                    : 'w-full text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none :ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800'
                                                : 'w-full text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none :ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800'
                                        }
                                        >
                                            {infoJitter}

                                        </div>
                                    </div>
                                </div>

                                <div className='w-full flex flex-row p-2 '>
                                    <div className='w-1/2 font-medium text-sm'>
                                        Nilai <i>Jitter</i>
                                    </div>
                                    <div className='w-1/2 '>
                                        : <b>{jitter}ms</b>
                                    </div>
                                </div>

                                <div className='w-full  flex flex-row p-2 '>
                                    <div className='w-1/2 font-medium text-sm'>
                                        Batasan Standar
                                    </div>
                                    <div className='w-1/2 '>
                                        : {batasanJitter}
                                    </div>
                                </div>
                            </div>
                            {/* tabel */}
                            <div className='w-full p-4'>
                                <div className='flex w-full flex-row justify-center items-center'>
                                    <span className=' text-sm font-medium p-3'>Tabel Standar <i>Jitter</i><span className='text-xs'><sup >[1]</sup></span> </span>
                                </div>
                                <div className="w-full md:w-full p-2 mb-1 ">
                                    <div className='flex justify-center overflow-hidden'>
                                        <Table hoverable={true}>
                                            <Table.Head>
                                                <Table.HeadCell>
                                                    Nilai
                                                </Table.HeadCell>
                                                <Table.HeadCell>
                                                    Indeks
                                                </Table.HeadCell>
                                                <Table.HeadCell>
                                                    Kategori
                                                </Table.HeadCell>

                                            </Table.Head>
                                            <Table.Body className="divide-y">
                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                        0ms
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        4
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        Sangat Bagus
                                                    </Table.Cell>
                                                </Table.Row>
                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                        0ms &#60; x &le; 75ms
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        3
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        Bagus
                                                    </Table.Cell>
                                                </Table.Row>
                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                        75ms &#60; x &le; 125ms
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        2
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        Sedang
                                                    </Table.Cell>
                                                </Table.Row>
                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                        125ms &#60; x &le; 225ms
                                                    </Table.Cell>
                                                    {/* <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            &#60;25%&#62; &ge; &le;
                                        </Table.Cell> */}
                                                    <Table.Cell>
                                                        1
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        Buruk
                                                    </Table.Cell>
                                                </Table.Row>
                                            </Table.Body>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-4 text-sm text-gray-600'>
                            Silakan menuju halaman
                            <Link to="/belajarqos/jitter" className='text-blue-800 hover:text-blue-500 underline'>
                                <span> Belajar Jitter</span>
                            </Link>
                            , jika ingin mencari tahu lebih lanjut.
                        </div>

                    </div>
                }
            </div>

            {/* Packet Loss */}
            <div className='p-5 my-8 border rounded-xl'>
                <div className='my-2 p-2 flex flex-col '>
                    <div className='text-base font-bold'>
                        Standar <i>Packet Loss</i>
                    </div>
                    <div className='mt-4 text-sm text-gray-600'>
                        Masukkan nilai hasil pengukuran <i>Packet Loss</i> tanpa satuan persen (%).
                    </div>
                </div>
                {/* input Packetloss */}
                <div>
                    <form onSubmit={handlePacketloss} >
                        <div className="flex flex-wrap mx-0 mb-2">
                            <div className="w-full md:w-1/3 p-2 mb-1 md:mb-0">
                                <div>
                                    <label htmlFor="Packetloss"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Packet Loss
                                    </label>
                                    <input type="text" id="Packetloss"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Contoh: 3"
                                        onChange={(e) => setPacketloss(e.target.value)}
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
                {/* hasil Packet loss */}
                {
                    cardHasilPacketloss
                    &&
                    <div className='p-2'>

                        <div className='font-semibold mb-4'>
                            Hasil
                        </div>
                        <div className="border rounded-xl p-2 flex flex-wrap flex-col md:flex-row w-full mx-0 mb-2 justify-between">
                            <div className="w-full  p-2 mb-1  md:mb-0">
                                <div className='w-full flex flex-row p-2 '>
                                    <div className='w-1/2 font-medium text-sm'>
                                        Kategori
                                    </div>
                                    <div className='w-1/2 '>

                                        <div className={
                                            infoPacketloss !== 'Sangat Bagus' ?
                                                infoPacketloss !== 'Bagus' ?
                                                    infoPacketloss !== 'Sedang' ?
                                                        infoPacketloss !== 'Buruk' ?
                                                            'w-full text-white bg-neutral-700 hover:bg-neutral-800 focus:ring-4 focus:outline-none :ring-neutral-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-neutral-800'
                                                            : 'w-full text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none :ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800'
                                                        : 'w-full text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none :ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800'
                                                    : 'w-full text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none :ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800'
                                                : 'w-full text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none :ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800'
                                        }
                                        >
                                            {infoPacketloss}

                                        </div>
                                    </div>
                                </div>

                                <div className='w-full flex flex-row p-2 '>
                                    <div className='w-1/2 font-medium text-sm'>
                                        Nilai  <i>Packet Loss</i>
                                    </div>
                                    <div className='w-1/2 '>
                                        : <b>{packetloss}%</b>
                                    </div>
                                </div>

                                <div className='w-full  flex flex-row p-2 '>
                                    <div className='w-1/2 font-medium text-sm'>
                                        Batasan Standar &#60;25%&#62; &ge; &le;
                                    </div>
                                    <div className='w-1/2 '>
                                        : {batasanPacketloss}
                                    </div>
                                </div>
                            </div>
                            {/* tabel */}
                            <div className='w-full p-4'>
                                <div className='flex w-full flex-row justify-center items-center'>
                                    <span className='text-sm font-medium p-3'>Tabel Standar <i>Packet Loss</i><span className='text-xs'><sup >[1]</sup></span> </span>
                                </div>
                                <div className="w-full md:w-full p-2 mb-1 ">
                                    <div className='flex justify-center overflow-hidden'>
                                        <Table hoverable={true}>
                                            <Table.Head>
                                                <Table.HeadCell >
                                                    Nilai
                                                </Table.HeadCell>
                                                <Table.HeadCell>
                                                    Indeks
                                                </Table.HeadCell>
                                                <Table.HeadCell>
                                                    Kategori
                                                </Table.HeadCell>

                                            </Table.Head>
                                            <Table.Body className="divide-y">
                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                        0% &le; x &#60; 3%
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        4
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        Sangat Bagus
                                                    </Table.Cell>
                                                </Table.Row>
                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                        3% &le; x &#60; 15%
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        3
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        Bagus
                                                    </Table.Cell>
                                                </Table.Row>
                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                        15% &le; x &#60; 25%
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        2
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        Sedang
                                                    </Table.Cell>
                                                </Table.Row>
                                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                        &gt; 25%
                                                    </Table.Cell>
                                                    {/* <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            &#60;25%&#62; &ge; &le;
                                        </Table.Cell> */}
                                                    <Table.Cell>
                                                        1
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        Buruk
                                                    </Table.Cell>
                                                </Table.Row>
                                            </Table.Body>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='mt-4 text-sm text-gray-600'>
                            Silakan menuju halaman
                            <Link to="/belajarqos/packetloss" className='text-blue-800 hover:text-blue-500 underline'>
                                <span> Belajar Packet Loss</span>
                            </Link>
                            , jika ingin mencari tahu lebih lanjut.
                        </div>

                    </div>
                }
            </div>

        </div>
    )
}

export default CekQoS