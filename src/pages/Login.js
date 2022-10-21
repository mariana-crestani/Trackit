import { useNavigate } from 'react-router-dom';
import { React, useContext, useState} from 'react';
import styled from 'styled-components';
import logo from '../assets/images/Logo.png';
import { URL } from '../constants/URL.js';
import axios from 'axios';
import Context from '../constants/Context.js';

export default function Login() {

   const {setUser} = useContext(Context)
   const [login, setLogin] = useState({email: '',	password: ''})
   const navigate = useNavigate()

   function handleForm(e){
   const {name, value} = e.target
   setLogin({...login, [name]:value})
   }
   
function Logar(e){
   e.preventDefault()

   const body = {
      email: login.email,
      password: login.password,
  }

  console.log('body',body)
      axios.post(`${URL}/auth/login`, body)

       .then((res) => {
         console.log('resposta Login',res.data)
         setUser(res.data)
         navigate('/habitos')
       })
   
       .catch((err) => {alert(err.response.data)})
   }

   /*
    if (movie.lenght === 0) {
       return <div>Carregando...</div>
    }
   
   */

   return (
      <LoginContainer>
         <img src={logo} alt='Logo' />

         <form onSubmit={Logar}>
         <FormContainer >
               <input
                  name='email'
                  value={login.name}
                  onChange={handleForm}
                  placeholder='email'
                  type='email'
               />
               <input
                  name='password'
                  value={login.password}
                  onChange={handleForm}
                  placeholder='senha'
                  type='password'
               />
               <button type='submit'>Entrar</button>
            
         </FormContainer >
         </form>
         <LinkCadastro>
            <p onClick={() => { navigate('/cadastro') }}>Não tem uma conta? Cadastre-se!</p>
         </LinkCadastro>
      </LoginContainer>
   )
}

const LoginContainer = styled.div`
width: 100%;
margin-top: 68px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

img{
margin-bottom: 20px;
}
`

const FormContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

input {
padding-left: 11px;
box-sizing: border-box;
margin-top: 6px;
width: 303px;
height: 45px;
background-color: #FFFFFF;
//background: #F2F2F2; cor quando o botão está desabilitado
border: 1px solid #D5D5D5;
border-radius: 5px;
color:#DBDBDB;
// color: #AFAFAF; quando botão desabilitado
font-family: Lexend Deca;
font-weight: 400px;
font-size: 20px;
}

button{
width: 303px;
height: 45px;
background-color: #52B6FF;
color: #FFFFFF;
font-size: 21px;
border-radius: 5px;
border: 0px;
margin-top: 6px;
cursor: pointer;
}
`
const LinkCadastro = styled.div`
margin-top: 25px;
font-size: 14px;
color: #52B6FF;
text-decoration-line: underline;
cursor: pointer;
`