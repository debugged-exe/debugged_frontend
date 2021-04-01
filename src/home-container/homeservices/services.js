import React,{Component} from 'react';
import 'tachyons';
import { BiMobile ,BiLaptop} from "react-icons/bi";

import {HiOutlineSpeakerphone } from "react-icons/hi";
import {DiGitBranch } from "react-icons/di";
import {VscGlobe } from "react-icons/vsc";
import {AiFillLock } from "react-icons/ai";
import './services.scss';

const Service=()=>
{
  return(
    <div className="flex flex-column items-center">
       <p className="mt4 mb4 center serv white" style={{fontFamily: 'Yusei Magic'}}>Our <span className="code" style={{fontFamily: 'Yusei Magic'}}>services</span>.</p>
       <div className="ma3 pa2 tl width">
         <div className=" serv1 white" data-aos="fade-right" data-aos-duration="800"><BiMobile size="2em" color="#e88f0a"/>Android/iOS Development</div>
         <div className="bb bw1 center mt3" ></div>
         <div className="f4 desc pa2">Develop the App your business needs today! </div>
       </div>
       <div  className="ma3 pa2  tl width">
         <div className=" serv1 white" data-aos="fade-right" data-aos-duration="800"><HiOutlineSpeakerphone size="2em" color="#e88f0a"/>Digital Marketing</div>
         <div className="bb bw1 center mt3"></div>
         <div className="f4 desc pa2">Providing exposure to your business online via Social Media Platforms (SEO, Analytics, etc)</div>
       </div>
       <div className="ma3 pa2 tl width">
         <div className=" serv1 white" data-aos="fade-right" data-aos-duration="800"><VscGlobe size="2em" color="#e88f0a"/>Server/Domain Hosting & Maintenance</div>
         <div className="bb bw1 center mt3" ></div>
         <div className="f4 desc pa2">Get your very own Digital Space</div>
       </div>
       <div className="ma3 pa2 tl width">
         <div className="  serv1 white" data-aos="fade-right" data-aos-duration="800"><BiLaptop size="2em" color="#e88f0a"/>Web Development</div>
         <div className="bb bw1 center mt3" ></div>
         <div className="f4 desc pa2">We ensure delivering simple, creative yet responsive websites ontime</div>
       </div>
       <div className="ma3 pa2 tl width">
         <div className="   serv1 white" data-aos="fade-right" data-aos-duration="800"><AiFillLock size="2em" color="#e88f0a"/>Web Security & SSL Certification</div>
         <div className="bb bw1 center mt3" ></div>
         <div className="f4 desc pa2">Worried about your Web identity? We have all your solutions</div>
       </div>
       <div className="ma3 pa2 tl width">
         <div className= " serv1 white" data-aos="fade-right" data-aos-duration="800"><DiGitBranch size="2em" color="#e88f0a"/>Wire Framing</div>
         <div className="bb bw1 center mt3" ></div>
         <div className="f4 desc pa2">Standout by using our UI/UX Designs (Layouts)</div>
       </div>
    </div>

  );
}
export default Service;
