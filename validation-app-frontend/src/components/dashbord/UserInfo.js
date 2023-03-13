import React from 'react'
import './UserInfo.css'

const UserInfo = ({name,email,phone,dob}) => {
    // console.log(name);
  return (
    <>
    <div className="post">
           <p> Name : {name}</p> 
           <p> Email : {email}</p> 
           <p> Number : {phone}</p> 
           <p> D-O-B : {dob}</p> 
    </div>
    
    </>
    
  )
}

export default UserInfo