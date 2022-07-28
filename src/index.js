import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';



let currDate= new Date(2022, 7, 22, 20);
currDate = currDate.getHours();
let img = "/logo192.png";
let greeting = "";
 const cssStyle = {
  
};

if (currDate >= 1 && currDate < 12){
  greeting = "good morning";
  cssStyle.color =" blue";
  
}else if (currDate >= 12 && currDate < 19){
  greeting = "good afternoon";
  cssStyle.color = "yellow";

}
else {
  greeting = "good night";
  cssStyle.color = 'orange';
}
 ReactDOM.render(

 <>
 <div>

 <span className='kp'><img src='/logo192.png'  alt='blank'/></span> 
 <h1 className='k'>Hello sir, <span style={cssStyle}> {greeting } </span>
 </h1>

  <span className='ks'>
 <img src='/logo192.png'  alt='blank'/></span>
 
 </div>
 </>
,document.getElementById('root')
  );



