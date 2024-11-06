import School from '../Assets/school-image.webp'
import College from '../Assets/College.png'
import Santech from '../Assets/santech.png'
function Education(){
    return(
        <div className=" bg-slate-800">
            <div  className=" bg-slate-800 text-center text-3xl text-blue-500 font-bold">
                <h1 className="gfont">Education</h1>
            </div>
            <div style={{display:"flex",justifyContent:"center"}}>
                <div className="font-bold text-2xl text-blue-500 m-10">
                    <h1 style={{backgroundColor:"aqua",padding:"5px",width:"300px",paddingLeft:"70px"}} className="gfont">Schools Education</h1> 
                    <img src={School}alt='schools' style={{height:'300px',width:"300px"}}></img>
                    <p className="gfont" style={{backgroundColor:"aqua",width:"300px",padding:"5px"}}>I completed my higher education at Government Higher Secondary School, Perumanallur, Tirupur, Tamil Nadu, India. </p>
                </div>
                <div>
                    <div className="font-bold text-2xl text-blue-500 m-10">
                        <h1 style={{backgroundColor:"aqua",padding:"5px",width:"300px",paddingLeft:"70px"}} className="gfont">College Education</h1>
                        <img src={College} alt='college' style={{height:"300px",width:"300px"}}></img>
                        <p className="gfont" style={{backgroundColor:"aqua",width:"300px",padding:"5px"}}>I completed my higher education at Government Polytecnic College, Perundurai, Erode, Tamil Nadu, India.</p>
                        
                        
                    </div>
                </div>
                <div>
                    <div className="font-bold text-2xl text-blue-500 m-10">
                        <h1 style={{backgroundColor:"aqua",padding:"5px",width:"300px",paddingLeft:"70px"}} className="gfont">IT Courses</h1>
                        <img src={Santech} alt='santech' style={{height:"300px",width:"300px"}}></img>
                        <p className="gfont" style={{backgroundColor:"aqua",width:"300px",padding:"5px"}}>I completed my IT Course education at SAN Enggineering Solution, Perundurai, Erode, Tamil Nadu, India.</p>

                        
                        
                    </div>
                </div>


            </div>
        </div>

      
     
      
       
    )
}
export default  Education
