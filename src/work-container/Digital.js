import React,{Component,useState,useEffect} from 'react';
import './work.css';
import 'tachyons';
import AOS from 'aos';
import 'bootstrap/dist/css/bootstrap.min.css';
import Marquee from "react-fast-marquee";

const Digitalproj=()=>{
    const[gal,setGal]=useState([]);

useEffect(()=>{
 fetch('https://fierce-wave-93667.herokuapp.com/digital')
 .then(response=>response.json())
 .then(resp=>{
   if(resp[0]._id){
     setGal(resp);
     console.log(resp.length,"gal");
   }
 })
 .catch(err => {
  console.log(err)

})

},[])


return(
  <>
<div className="flex flex-wrap">
<Marquee pauseOnHover={true} gradient={false} speed={40}>{
   gal.map((data)=>(
    <div className="mh5 mv2" style={{height:'300px', width:'300px'}}>

        <a className="dim flex flex-column items-center justify-center" href={data.link}>
       <img src={data.image} style={{borderRadius:'30px'}} height={data.height} width={data.width}/>
       <h3 className="white" style={{fontFamily: 'Yusei Magic'}}></h3></a>
     </div>
   ))
 }</Marquee>
</div>

</>
);
};

export default Digitalproj;
