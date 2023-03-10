import { useNavigate } from "react-router-dom";
import React, {useState} from "react";
import './login-styles.css'
import useAuth from "../../hooks/useAuth";

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  
const Login = () =>{
    const navigate = useNavigate();    
    const [login,  setLogin]=useState("")
    const [password, setPassword]=useState("")

    const {makeLogin} = useAuth();    
    const token = useAuth().token;    
    
    
    const handleSubmit =(e)=>{
        e.preventDefault();

        if(!login | ! password){
            alert('Preencha todos os campos')                
            return;
        }

        makeLogin(login,password)
                  
        if (token){
            alert('Login realizado com sucesso') 
            navigate('/')  
        }
         
         
       
         
    }

    return(
      <div className="login">
       <div className="container" style={{ display:'flex', widh:'150px' }}>
         <div className="card" style={{}}>
            <div className="card-body">
                <div class="fadeIn first" 
                style={
                    {'display':'flex',
                    justifyContent:'center',
                    padding:'10px'}
                }>                 
                <h1 style={{color:'#e70052'}}>Login</h1>
                </div>
                
                <form onSubmit={    handleSubmit }>  
                    <input  style={{ margin:'10px 50px', display:'flex'}}
                     type="text" id="user"  name="user" placeholder="user" 
                     value={login} onChange={(e)=>setLogin(e.target.value)} />
                    
                    <input style={{display:'flex',margin:'10px 50px',}}
                    type="password" id="password" name="password" placeholder="senha" 
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)}/>
                    
                    <input style={{ justifyContent:'left', background:'#e70052', color:'#FFFFFF'}}
                    
                    type="submit" class="fadeIn fourth" value="Entrar" />
                </form>                
            </div>
        </div>
       </div>
      </div>
    )
}
export default Login

