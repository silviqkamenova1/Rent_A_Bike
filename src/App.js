import React from 'react';
import { Route, Routes } from 'react-router-dom';


import { AuthProvider } from './contexts/AuthContext';
//import { useService } from './hooks/useService';

import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import AddBike from './components/AddBike/AddBike';
//import Customers from './components/Customer/Customers';
import News from './components/News/News';
import Footer from './components/Footer/Footer';
import Copyright from './components/Copyright/Copyright';
import Details from './components/Details/Details';


import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Catalog from './components/Catalog/Catalog';
import { Logout } from './components/Logout/Logout';
import Edit from './components/Edit/Edit';
import { RoutGuard } from './components/common/RouteGuard';
import { BikeProvider } from './contexts/BikeContext';
import { GameOwner } from './components/common/BikeOwner';

export default function App() {


   return (
      <AuthProvider >
         <BikeProvider>
            <body id='body-bg'>
               <div className="header_section header_bg">
                  <Navigation />
                  <Routes>
                     <Route path='/' element={<Home />} />
                  </Routes>
               </div>
               <Routes>
                  {/* <Route path='' element={<Customers />} /> */}
                  <Route path='/news' element={<News />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/register' element={<Register />} />
                  <Route path='/news' element={<Footer />} />
                  <Route path='/news' element={<Copyright />} />
                  <Route path='/catalog' element={<Catalog />} />
                  <Route path='/catalog/:bikeId' element={<Details />} />
                  <Route element={<RoutGuard />}>

                     <Route path='/create' element={<AddBike />} />
                     <Route path='/catalog/:bikeId/edit' element={
                        <GameOwner>
                           <Edit />
                        </GameOwner>
                     } />
                     <Route path='/logout' element={<Logout />} />

                  </Route>
                  {/* <Footer />
                  <Copyright /> */}
               </Routes>
            </body>
            <footer>
               <div className="copyright_section">
                  <div className="container">
                     <p className="copyright_text">Copyright 2019 All Right Reserved By Silviya Georgieva.<a href="https://html.design"> Free  html Templates</a></p>
                  </div>
               </div>
            </footer>
         </BikeProvider>
      </AuthProvider>
   );
}

