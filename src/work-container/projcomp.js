import React,{Component,useState,useEffect} from 'react';
import './work.css';
import 'tachyons';
import AOS from 'aos';
import {BsChevronDoubleDown } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-elastic-carousel'

const Projc =()=> {

  AOS.init();
  const[items,setItems]=useState([]);
    const [visible,setVisible]=useState(3);
      const [len,setLen]=useState(0);

   useEffect(()=>{
     fetch('https://fierce-wave-93667.herokuapp.com/completed')
     .then(response=>response.json())
     .then(resp=>{
       if(resp[0].title){
         setItems(resp);
         setLen(resp.length);
         console.log(resp.length);
       }
     })
     .catch(err => {
 			console.log(err)

 		})
  },[])


const showMoreItems=()=>
  {
    setVisible((prev)=>prev+3);
  }
   return (
     <>
          <div className="proout ">
              {
                items.slice(0,visible).map((data)=>
                  (
                    <div>
                      <div className="comp" data-aos="fade-left" data-aos-duration="500">
                           <Carousel itemsToShow={1}>
                             <img src={data.image1} alt="project sharva" className=" imgdiv"/>
                             <img src={data.image2} alt="project sharva" className="imgdiv"/>
                             <img src={data.image3} alt="project sharva"  className="imgdiv"/>
                           </Carousel>
                                   <div className="flex flex-column items-center" style={{width:'100vw'}}data-aos="fade-left" data-aos-duration="500">
                                    <p  className="pro tc white" style={{fontFamily: 'Yusei Magic'}}> {data.title}</p>
                                    <p>{data.description}</p>
                                    <a href={data.link}><button className=" book grow br2 mb1" >View website</button></a>
                                   </div>
                         </div>
                      <div className="bt differline mt3 mb3 center"></div>
                  </div>
                  )
                )
              }
              <h5 onClick={showMoreItems} className={`center showmore mt5 ${visible>=len?'hide':''}`}>Show More</h5>
              <BsChevronDoubleDown className={` arrowdown code ${visible>=len?'hide':''}`} size="2rem"/>
           </div>
      </>
      );
    };
export default Projc;
