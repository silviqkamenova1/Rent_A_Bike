import './App.css';

// import { useState, useEffect } from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';

// import { bikeServiceFactory } from './services/bikeService';
// import { authServiceFactory } from './services/authServices';
import { AuthContext, AuthProvider } from './contexts/AuthContext';

import { BikeOwner } from './components/common/BikeOwner';
import { RoutGuard } from './components/common/RouteGuard';
// import { useLocalStorage } from './hooks/useLocaleStorage';

import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import AddBike from './components/AddBike/AddBike';
import Contacts from './components//Contacts/Contacts';
import News from './components/News/News';
import Search from './components/Search/Search';
import Details from './components/Details/Details';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Catalog from './components/Catalog/Catalog';
import { Logout } from './components/Logout/Logout';
import Edit from './components/Edit/Edit';
import NewsDetails1 from './components/News/NewsDetails/NewsDetails1';
import NewsDetails2 from './components/News/NewsDetails/NewsDetails2';
import NewsDetails3 from './components/News/NewsDetails/NewsDetails3';
import Subscribe from './components/Subscribe/Subscribe';
import { BikeProvider } from './contexts/BikeCntext';

export default function App() {


   return (
      <AuthProvider>
         <BikeProvider>
            <body>
               <div className="header_section header_bg">
                  <Navigation />
                  <Routes>
                     <Route path='/' element={<Home />} />
                  </Routes>
               </div>
               <Routes>
                  <Route path='/login' element={<Login />} />
                  <Route path='/register' element={<Register />} />
                  <Route path='/contacts' element={<Contacts />} />
                  <Route path='/catalog' element={<Catalog  />} />
                  <Route path='/catalog/:bikeId' element={<Details />} />
                  <Route path='/search' element={<Search />} />
                  <Route path='/news' element={<News />} />
                  <Route path='/news-details1' element={<NewsDetails1 />} />
                  <Route path='/news-details2' element={<NewsDetails2 />} />
                  <Route path='/news-details3' element={<NewsDetails3 />} />
                  <Route path='/subscribe' element={<Subscribe />} />
                  <Route element={<RoutGuard />}>
                     <Route path='/create' element={<AddBike />} />
                     <Route path='/catalog/:bikeId/edit' element={
                        <BikeOwner>
                           <Edit />
                        </BikeOwner>
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

