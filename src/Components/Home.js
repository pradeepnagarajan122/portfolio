import Myimg from'../Assets/mypic-bg.png'

function Home(){
    return(


    <div className="bg-slate-800 pt-20"style={{display:"flex",justifyItems:"center"}}>
        <img className='mypic relative' src={Myimg} alt='Myimg'></img> 
    
    <div> <br></br>
                
    <p className="gfont absolute text-center  text-blue-500 text-4xl pt-20" style={{marginLeft:"200px",}}>N PRADEEP</p>
    <p className="gfont absolute text-center text-4xl text-blue-500 pt-32" style={{marginLeft:"130px"}}>Front End React Developer</p>
    </div>
        
   
   

    </div>

     
    
  
       
   

    
    )
}
export default Home