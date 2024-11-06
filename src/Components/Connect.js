import Whatsup from '../Assets/Whatsup.png'
 import linkdin from '../Assets/linkdin.png.png'
 import Github from '../Assets/github.png.png'
 import Gmail from  '../Assets/gmail.png'
import { Link } from "react-router-dom"

function Connect(){
    return(
        <div className= "bg-slate-800  text-center">
            <div className="text-3xl text-blue-500 font-bold">
            <h1>Let's Connect</h1>
            </div> <br></br>
            <div style={{marginLeft:"400px,",display:"flex",justifyContent:"center"}} className="gap-20 Connect">
           <Link to="https://api.whatsapp.com/send/?phone=%2B918220961059&text&type=phone_number&app_absent=0"><img src={Whatsup} alt='Wup'></img></Link>
           <Link to="https://www.linkedin.com/in/pradeep-n-pradeep-7843972a0/"><img src={linkdin}></img></Link>
           <Link to="https://github.com/pradeepnagarajan122"><img src={Github} alt='github'></img></Link>
           <Link to="mailto:npradeeppradeep7@gmail.com"><img src={Gmail} alt='Gmail'></img></Link>
           </div>

        </div>
    )
}
export default Connect