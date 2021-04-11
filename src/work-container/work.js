import React, { Component, useState, useEffect, lazy, Suspense } from 'react';
import './work.css';
import 'tachyons';
import { BsChevronDoubleDown } from "react-icons/bs";
import AOS from 'aos';
import { UpcomingProjects } from './upcomingprojects.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-elastic-carousel'
import Footer from '../Footer/Footer';
const Projc = lazy(() => import('./projcomp.js'));
const Digitalproj = lazy(() => import('./Digital.js'));


const Work = () => {

  AOS.init();
  const [items, setItems] = useState([]);
  const [upcoming, setUpcoming] = useState(UpcomingProjects);



  return (
    <>
      <span id="projcomp"></span>
      <div className="home2" >
        <div className="mt4" >
          <p className="pro ml4 white projhead" style={{ fontFamily: 'Yusei Magic' }}>Projects Completed</p>
          <div className="bb bw2 left line "></div>
          <Suspense fallback={<div className="flex flex-column justify-center items-center"><p className="white center f3 b pa5">Loading...</p></div>}>
            <Projc />
          </Suspense>

          <div className="mt5">
            <p className="pro white ml3" style={{ fontFamily: 'Yusei Magic' }}>Our digital marketing clients</p>
            <div className="bb bw2 left line mb4"></div>
            <Suspense fallback={<div className="flex flex-column justify-center items-center"><p className="white center f3 b pa5">Loading...</p></div>}>
              <Digitalproj />
            </Suspense>

          </div>

          <div className="mt5">
            <p className="pro white ml3" style={{ fontFamily: 'Yusei Magic' }}> Upcoming Completed</p>
            <div className="bb bw2 left line"></div>

            <Carousel className="mt5 center widthchange" style={{ width: '100%', height: '100%' }}>
              {
                upcoming.map((project) =>
                (
                  <div className="proj br bl bw1 code">
                    <p className="mt5 proup white fw5" style={{ fontFamily: 'Yusei Magic' }}>{project.title.toUpperCase()}</p>
                    <div className="bb center mt4 upcomingline"></div>
                    <p className="updes">{project.description}</p>
                  </div>
                ))
              }
            </Carousel>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};
export default Work;
