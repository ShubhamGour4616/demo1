import { useState } from 'react'
import axios from 'axios'
import './Form.css'
import {useNavigate } from 'react-router-dom'




const Form = () => {
    let navigate = useNavigate()
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        dob: ""
    })
// it call on every input change value
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
     }

// it will call on Submit button click
    const register = (e) => {
        e.preventDefault();
        const { name, email, phone, dob } = user
        if (name && email && phone && dob) {
            axios.post("http://localhost:9002/register", user)
            .then( res => {
                // 
                if(res.data.status==="success"){
                    alert(res.data.message)
                    forNavigate();
                }
                else{
                    alert(res.data.message)
                }
            })
        } else {
            alert("invlid input")
        }
   }
    // call after button click for redirect to Form Details page
     function forNavigate(){
        navigate('/dashbord')
     }


    return (
        <div className='register'>
            <form onSubmit={register}>
                <h1>Form</h1>
                <div className='ineer-contan'>
                    <div className="field">
                        <input
                            type="text"
                            name="name"
                            placeholder="Username"
                            value={user.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="field">

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={user.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="field">

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Number"
                            value={user.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="field">

                        <input
                            type="date"
                            name="dob"
                            value={user.dob}
                            onChange={handleChange}
                            required
                        />
                    </div>


                 <button className='submit-btn'  >Submit</button> 
                </div>
            </form>
        </div>

    );
}
export default Form