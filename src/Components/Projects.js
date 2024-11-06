import { Link } from 'react-router-dom'
import Trip from'../Assets/download.png'
import React from '../Assets/my react.png'
function Projects(){
    return(
        <div>
            <p  className=" bg-slate-800 text-center text-3xl text-blue-500 font-bold pt-40 gfont">My projects</p>
            <div  className=" bg-slate-800 h-full w-full pt-20 gap-20" style={{display: 'flex', justifyContent: 'center'}}>
                <div className="  border-2  text-center m-3 " style={{width: '300px', height: '400px'}}>
                    <div>
                        <img className="h-56 w-80" src={Trip} alt='/'></img>
                    </div><hr></hr>
                    <div className="text-white pt-34">
                    <p>This Project build using based on HTML And CSS and Tailwind CSS hosted on Vercel</p>
                    </div> <br></br>
                    <div className="container bg-blue-500 h-7 w-20 ml-28 mt-4 text-center myview">
                        <Link to="https://trip-beta.vercel.app/">View</Link>

                    </div>
                </div>

                <div className="  border-2 text-center m-3" style={{width: '300px', height: '400px'}}>
                    <div>
                        <img className="h-56" src={React} alt='/'></img>
                    </div> <hr></hr>
                    <div className="text-white pt-34">
                    <p>This Project build using React.Js based on HTML And CSS and Tailwind CSS hosted on Vercel</p>
                    </div> 
                    <div>
                    <div className="container bg-blue-500 h-7 w-20 text-center ml-28 mt-10 myview">
                        <Link to="https://pradeep-civil-react.vercel.app/">View</Link>

                    </div>
                    </div>
                </div>

        </div>

          



          
          
</div>
        
    )
}
export default Projects