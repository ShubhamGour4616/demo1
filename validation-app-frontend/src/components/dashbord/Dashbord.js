import axios from 'axios'
import UserInfo from './UserInfo'
import { useState,useEffect } from 'react'
import './Dashbord.css'


const Dashbord = () => {
    const [allData ,setAllData] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:9002/dashbord")
        .then(res => {
              setAllData(res.data);
        })
    },[])
   

       let list= allData.map((data)=>{
           return ( 
           <div key={data._id} ><UserInfo {...data} /> </div>
           )
        })
      
    return (
        <> 
            <div className="container">
                <div className='heading'>
                    <h1> All User Form Details </h1>
                </div>

                <div className='content'>
                     {list}
                     <UserInfo/>
                </div>
            </div>
        </>
    );
}
export default Dashbord