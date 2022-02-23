import { createUserWithEmailAndPassword } from "@firebase/auth";
import React,{useState} from "react";
import {Facebook,Google} from "../FireBase/auth"
import {auth} from "../FireBase/fireBase-Config"






function Login() {
    const [inputField, setinputField] = useState({
        email:'',
        password:""
    })

    function Onchange(event) {
        event.preventDefault();
        const {name,value}=event.target;
        
        setinputField(eve=>({
            ...eve,
            [name]:value
        }))

    }
    
    function onSubmit() {
        createUserWithEmailAndPassword(auth,inputField.email
            ,inputField.password).then((res)=>{
                const user= res.user;
                console.log('user',user)
            })
            .catch((error)=>{
                alert(error.message)
            })
    }

    return (

        <div id="loginform">
            <div id="headerTitle">
                <h1>LOGIN</h1>
            </div>
            <div className="row login_page">
                <input type="email" name="email" onChange={Onchange} value={inputField.email} placeholder="Enter Your Email" alt="email" />
                <input type="password" onChange={Onchange} name="password" placeholder="Enter Your Password" alt="password" />

                <button className="login_button" onClick={onSubmit} value={inputField.password}  id="button">Log In</button>

            </div>

            <div id="alternativeLogin">
                <h5>OR SIGNIN WITH</h5>



            </div>
            <div id="iconGroup">
                <button style={{fontSize:"3rem", border:"none"}} onClick={Google}><i class="fab fa-google " style={{backgroundColor:"#FFFFFF"}}></i></button>
                <button  style={{fontSize:"3rem", border:"none"}} onClick={Facebook}><i class="fab fa-facebook" style={{backgroundColor:"#FFFFFF"}}></i></button>
            </div>



        </div>


    )

}

export default Login;