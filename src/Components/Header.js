import Menubar from '../Assets/menubar.png.svg'
import React,{ useState} from 'react'



function Header(){
    
function Home(){
    window.location.href="/"
}
  function Projects(){
    window.location.href="#Projects"
  }
  function Education(){
    window.location.href="#Education"
  } 
  function Connect(){
    window.location.href="#Connect"
  } 
  const [popupStatus, setpopupStatus] = useState(false)
  


  function showMenu(){
    setpopupStatus(!popupStatus)

    if(popupStatus===true){
      setpopupStatus(false)
    }
    else{
      setpopupStatus(true)
    }

  }



    return(
        <div className="bg-slate-700 h-12 w-full">
           <div className="flex">
            <h1 className="gfont flex pt-2 text-3xl text-blue-500">My portfolio</h1>
           
          <div className="flex gap-24 pt-3 ml-36">
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
            <button className="Menubar" onClick={showMenu}><img src={ Menubar } alt=' Menubar' className="bg-white"></img></button>
            
        
            
            {(popupStatus===true)&&<div className="justify-center h-30 text-white bg-slate-700 mt-3 p-2 w-20 pr-20 rounded-md text-center ring-offset-neutral-50" style={{border:"2px",backgroundColor:"white",justifyContent:"center"}}>
              <a href='#' className="myhome  text-blue-500"> home</a> 
              <a href='#Projects' className="myproject text-blue-500"> project</a> 
              <a href='#Education' className="my1education  text-blue-500"> education</a>
              <a href='#Connect' className="myconnect  text-blue-500"> connect</a>
             
            </div>}
            
          </div>
         
        </div>
        </div>
      </div>
    )
}
export default Header