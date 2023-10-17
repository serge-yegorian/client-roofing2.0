import { useState } from 'react';
import './Admin.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Admin = () => {

    const navigate = useNavigate();

    const [password, setPassword] = useState('')

    const login = (e) => {
        e.preventDefault();
        axios.post('https://clownfish-app-f6era.ondigitalocean.app/project/login', {password})
        .then((response) => {
            console.log(response.data)
            window.localStorage.setItem('floridakitchencabinetsPW', response.data);
            navigate('/')
        })
        .catch((err)=> {
            console.log(err)
        })
    }   

    return (
    <>
        <h1>Enter password</h1>
        <form className='admin' onSubmit={login}>
            <input className='admin__input' placeholder='password' onChange={(e)=>{setPassword(e.target.value)}}/>
            <button className="adminn__cta">LogIn</button>
        </form>
    </>
    )
}

export default Admin;