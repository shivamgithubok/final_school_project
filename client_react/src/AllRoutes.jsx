import React from 'react';
import { Routes, Route } from 'react-router-dom';
import First from './Component/First/First';
import Help from './Component/Help/Help';
import Login from './Component/Login/Login';
import RouteMain from './Component/Main/HomeRoute';
import Signup from './Component/Signup/Signup';
import Buffer from './Component/Main/Buffer';
import HomeRoute from './Component/Main/HomeRoute';
import Home from './Component/Home/Home'
import Feature from './Component/Main/Feature';
import Contact from './Component/Main/Contact';
function AllRoutes({ slidein, handleslidein }) {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<First />} />
            <Route path="/help" element={<Help />} />
            <Route path="/login" element={<Login />} />
            <Route path="/main" element={<RouteMain slidein={slidein} handleslidein={handleslidein} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/buffer" element={<Buffer />} />
            <Route path="/homeRoute" element={<HomeRoute />} />
            <Route path="/feature" element={<Feature />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
}

export default AllRoutes;
