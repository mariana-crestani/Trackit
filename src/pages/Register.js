import styled from 'styled-components';
import logo from '../assets/images/Logo.png';
import { useNavigate } from 'react-router-dom';
import { React, useState } from 'react';
import axios from 'axios';
import { URL } from '../constants/URL.js';

export default function Register() {

    const [form, setForm] = useState({ email: '', password: '', name: '', image: '' })
    const navigate = useNavigate()

    function handleForm(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

function NewRegister(e){
    e.preventDefault()

    const body = {
        email: form.email,
        name: form.name,
        image: form.image,
        password: form.password
    }

    
        axios.post(`${URL}/auth/sign-up`, body)

        .then((res) => {
            console.log('resposta register',res)
            navigate('/')
         })

         .catch((err) => {alert(err.response.data)})

}    

    return (
        <LoginContainer>
            <img src={logo} alt='Logo' />

<form onSubmit={NewRegister}>
            <FormContainer>
                    <input
                        name='email'
                        value={form.email}
                        onChange={handleForm}
                        placeholder='email'
                        type='email'
                    />
                    <input
                        name='password'
                        value={form.password}
                        onChange={handleForm}
                        placeholder='senha'
                        type='password'
                    />
                    <input
                        name='name'
                        value={form.name}
                        onChange={handleForm}
                        placeholder='nome'
                        type='text'
                    />
                    <input
                        name="image"
                        value={form.image}
                        onChange={handleForm}
                        placeholder='foto'
                        type="url"
                    />
                    <button type='submit' >Cadastrar</button>
            </FormContainer>
</form>
            <LinkCadastro>
                <p onClick={() => { navigate('/') }}>Já tem uma conta? Faça login!</p>
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
const LinkCadastro = styled.text`
margin-top: 25px;
font-size: 14px;
color: #52B6FF;
text-decoration-line: underline;
cursor: pointer;
`