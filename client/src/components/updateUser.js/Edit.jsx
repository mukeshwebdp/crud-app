import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import '../adduser.js/Add.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

function Edit(){
    const users= {
        fname: '',
        lname: '',
        email:''
    }
    const {id} = useParams();
    const [user, setUser] = useState(users)
    const Navigate = useNavigate()
    const inputChangeHandlerHandler =(e)=>{
        const {name,value}= e.target;
        setUser({...user,[name]:value});
        
    }
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/getone/${id}`)
        .then((response)=>{
            setUser(response.data)
            
        }).catch((error)=>{
            console.log(error);
        })
    },[id])

    const submitForm = async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8000/api/update/${id}`, user)
        .then((response)=>{
            toast.success(response.data.msg,{position: 'top-right'})
            
            Navigate('/')
        }).catch((error)=> console.log(error))
    }
    return(
        <div className='addUser'>
            <Link to={'/'}>Back</Link>
            <h3>Update user</h3>
            <form className='addUserFrom' onSubmit={submitForm}>

                <div className="inputGroup">
                <label htmlFor="fname">Fist name</label>
                <input onChange={inputChangeHandlerHandler} value={user.fname} type="text" name="fname" id="fname" autoComplete='off' placeholder='Fist name'/>
                </div>

                <div className="inputGroup">
                <label htmlFor="lname">Last name</label>
                <input onChange={inputChangeHandlerHandler} value={user.lname} type="text" name="lname" id="lname" autoComplete='off' placeholder='Last name'/>
                </div>
                <div className="inputGroup">
                <label htmlFor="email">Email</label>
                <input onChange={inputChangeHandlerHandler} value={user.email} type="text" name="email" id="email" autoComplete='off' placeholder='Email'/>
                </div>
                
                <div className="inputGroup">
                    <button type='submit'>UPDATE USER</button>
                </div>
               
            </form>
        </div>
    )
}

export default Edit;