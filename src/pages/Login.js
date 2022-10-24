import { useNavigate } from 'react-router-dom';
import { React, useContext, useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/images/Logo.png';
import { URL } from '../constants/URL.js';
import axios from 'axios';
import ContextLogin from '../constants/ContextLogin.js';
import { ThreeDots } from 'react-loader-spinner'

export default function Login() {

   const { setUser} = useContext(ContextLogin)
   const [login, setLogin] = useState({ email: '', password: '' })
   const [disabledButton, setDisabledButton] = useState(false);
   const [notSwitch, setNotSwitch] = useState(true);
   const navigate = useNavigate()

   function handleForm(e) {
      const { name, value } = e.target
      setLogin({ ...login, [name]: value })
   }

   function Logar(e) {
      e.preventDefault()
      setDisabledButton(true)
      setNotSwitch(false)

      const body = {
         email: login.email,
         password: login.password,
      }

      console.log('body', body)
      axios.post(`${URL}/auth/login`, body)

         .then((res) => {
            setDisabledButton(false)
            setNotSwitch(true)
            setUser(res.data)
            navigate('/habitos')
         })

         .catch((err) => {
            alert(err.response.data)
            setDisabledButton(false)
            setNotSwitch(true)
         })
   }

   return (
      <LoginContainer disable={disabledButton}>
         <img src={logo} alt='Logo' />

         <form onSubmit={Logar}>
            <FormContainer >
               <input
                  required
                  name='email'
                  value={login.name}
                  onChange={handleForm}
                  placeholder='email'
                  type='email'
                  disable={disabledButton}
               />
               <input
                  required
                  name='password'
                  value={login.password}
                  onChange={handleForm}
                  placeholder='senha'
                  type='password'
                  disable={disabledButton}
               />
               <button type='submit' disable={disabledButton}>
                    <ButtonContent visible={notSwitch}>
                        Entrar
                    </ButtonContent>
                    <ThreeDots color="white" visible={disabledButton} />
                  </button>
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
background-color: ${props => props.disable ? '#F2F2F2' : '#FFFFFF'};
border: 1px solid #D5D5D5;
border-radius: 5px;
color: ${props => props.disable ? '#AFAFAF' : '#DBDBDB'};
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
display: flex;
justify-content: center;
align-items: center;
}
`
const LinkCadastro = styled.div`
margin-top: 25px;
font-size: 14px;
color: #52B6FF;
text-decoration-line: underline;
cursor: pointer;
`
const ButtonContent = styled.h1`
    display: ${props => props.visible ? 'contents' : 'none'};
`