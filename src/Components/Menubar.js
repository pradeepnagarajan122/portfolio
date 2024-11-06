import React from 'react'


const Menubar = () => {
  return (
    <div className="bg-slate-700 h-12 w-full">
    <div className="flex">
     <h1 className="gfont flex pt-2 text-3xl text-blue-500 ml-5">My portfolio</h1>
    
   <div className="flex gap-24 pt-3 ml-40">
   <div style={{marginLeft:"600px",color:"dodgerblue"}}>
     <button className="Home" onClick={Home}>Home</button>
   </div>
   <div style={{color:"dodgerblue"}}>
       <button className="Projects" onClick={Projects}>Projects</button>
   </div>
   <div  style={{color:"dodgerblue"}}>
       <button className="MyEducation" onClick={Education}>Education</button>
   </div>
   <div  style={{color:"dodgerblue"}}>
     <button className="Connect" onClick={Connect}>Connect</button>

   </div>
   <div>
     <button className="Menubar" ><img src={ Menubar } alt=' Menubar' className="bg-white"></img></button>

   </div>
  
 </div>

   

    
 

 </div>
    

 

     
     
        
    

 </div>
  )
}

export default Menubar

