import React,{Component} from 'react';
import 'tachyons';
import AOS from 'aos';
import "tailwindcss/tailwind.css";
import './package.css';

const Package=()=>
{
  AOS.init();
  return(
    <div className="mt1 " data-aos="slide-up" data-aos-duration="1300">
    <p className="serv white"> Our <span className="code" style={{fontFamily: 'Yusei Magic'}}>Packages</span> </p>
    <div className=" mt4 packdiv">

       <div className="div1 ma4 pa2 shadow-2 black flex flex-column ">
       <h3 className="white mt4 serv2">Mobile Applications</h3>
       <h5 className="white mb3 mt3 center">Starts from <span className="b">9999/-</span></h5>
       <h5 className="center mt3" style={{color:'#e88f0a'}}>Includes:</h5>
       <p>- Android App</p>
       <p>- IOs App</p>
       <p>- Progressive web apps (PWA)</p>
       <p>- Feature on Playstore/Appstore</p>
       <button className=" book items-center px-4 py-2 mx-auto mt-auto grow br2 mb4"><a href="https://wa.me/919168894490" style={{textDecoration:'none',color:'white'}}>Book</a></button>
      </div>

      <div className="div1 ma4 pa2 shadow-2 black flex flex-column">
      <h3 className="white mt4 serv2">Digital Marketing</h3>
      <h5 className="white mb3 mt3 center">Starts from <span className="b">4999/-</span></h5>
      <h5 className="center mt3" style={{color:'#e88f0a'}}>Includes:</h5>
      <p>- Social media marketing</p>
      <p>- Content writing</p>
      <p>- Facebook/Instagram ads</p>
      <p>- Handling social media accounts</p>
      <button className=" book items-center px-4 py-2 mx-auto mt-auto grow br2 mb4"><a href="https://wa.me/919168894490" style={{textDecoration:'none',color:'white'}}>Book</a></button>
     </div>

       <div className="div1 ma4 pa2 shadow-2 black flex flex-column">
       <h3 className="white mt4 serv2"> Websites</h3>
       <h5 className="white mb3 mt3 center">Starts from <span className="b">5999/-</span></h5>
       <h5 className="center mt3" style={{color:'#e88f0a'}}>Includes:</h5>
       <p>- Custom Domain Name</p>
       <p>- Server Hosting</p>
       <p>- SSL Certificate</p>
       <p>- Complete data security</p>
       <p>- Search engine optimization</p>
       <p>- Responsive design</p>
       <p>- Elegant themes</p>
       <button className=" book items-center px-4 py-2 mx-auto mt-3 grow br2 mb4"><a href="https://wa.me/919168894490" style={{textDecoration:'none',color:'white'}}>Book</a></button>
      </div>

       </div>
    </div>
  );
}

export default Package;
