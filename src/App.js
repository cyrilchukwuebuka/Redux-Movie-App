import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import './App.scss';

import Home from './components/home/Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import MovieDetail from './components/movieDetail/MovieDetail'
import PageNotFound from './components/pageNotFound/PageNotFound'

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='movie/:imbdID' element={<MovieDetail />} />
            <Route path='*' element={<PageNotFound />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <Header />
      <main className='app_container'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
