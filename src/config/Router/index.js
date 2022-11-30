import React from 'react'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import { DashboardAdmin, DashboardISP, Home, Login, BelajarQOS, BelajarThroughput, BelajarDelay, BelajarJitter, BelajarPacketLoss, Pengukuran } from '../../pages'

const Routess = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/pengukuran' element={<Pengukuran />}>
                </Route>
                <Route path='/belajarqos/packetloss' element={<BelajarPacketLoss />}>
                </Route>
                <Route path='/belajarqos/jitter' element={<BelajarJitter />}>
                </Route>
                <Route path='/belajarqos/delay' element={<BelajarDelay />}>
                </Route>
                <Route path='/belajarqos/throughput' element={<BelajarThroughput />}>
                </Route>
                <Route path='/belajarqos' element={<BelajarQOS />}>
                </Route>
                <Route path='/dashboardisp' element={<DashboardISP />}>
                </Route>
                <Route path='/dashboardadmin' element={<DashboardAdmin />}>
                </Route>
                <Route path='/login' element={<Login />}>
                </Route>
                <Route path='/' element={<Home />}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routess