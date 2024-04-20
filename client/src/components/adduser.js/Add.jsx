import { Link, useNavigate } from 'react-router-dom';
import './Add.css'
import { useState } from 'react';
import axios from 'axios'
import toast from 'react-hot-toast';
function Add(){
    const users = {
        fname: '',
        lname: '',
        email: '',
        password: '',
    }
    const [user, setUser] = useState(users) // user data 
    const navigate = useNavigate();
    const inputHandler = (e)=>{
        const { name, value } = e.target;
         setUser({...user, [name]: value}); 
    }
        // api catch 
    const submitForm = async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8000/api/create", user)
        .then((response)=>{
            toast.success(response.data.msg,{position: 'top-right'})
            console.log(response);
            navigate('/')
        }).catch((error)=> console.log(error))
    }
    return(
        <div className='addUser'>
            <Link to={'/'}>Back</Link>
            <h3>Add new user</h3>
            <form className='addUserFrom' onSubmit={submitForm}>

                <div className="inputGroup">
                <label htmlFor="fname">Fist name</label>
                <input onChange={inputHandler} type="text" name="fname" id="fname" autoComplete='off' placeholder='Fist name'/>
                </div>

                <div className="inputGroup">
                <label htmlFor="lname">Last name</label>
                <input onChange={inputHandler} type="text" name="lname" id="lname" autoComplete='off' placeholder='Last name'/>
                </div>
                <div className="inputGroup">
                <label htmlFor="email">Email</label>
                <input onChange={inputHandler} type="email" name="email" id="email" autoComplete='off' placeholder='Email'/>
                </div>
                <div className="inputGroup">
                <label htmlFor="password">Password</label>
                <input onChange={inputHandler} type="password" name="password" id="password" autoComplete='off' placeholder='Password'/>
                </div>
                <div className="inputGroup">
                    <button type='submit'>ADD USER</button>
                </div>
               
            </form>
        </div>
    )
}

export default Add;