import styled from 'styled-components';
import logo from '../assets/images/Logo.png';
import { useNavigate } from 'react-router-dom';
import { React, useState } from 'react';
import axios from 'axios';
import { URL } from '../constants/URL.js';
import { ThreeDots } from 'react-loader-spinner'

export default function Register() {

    const [form, setForm] = useState({ email: '', password: '', name: '', image: '' })
    const navigate = useNavigate()
    const [disabledButton, setDisabledButton] = useState(false);
   const [notSwitch, setNotSwitch] = useState(true);

    function handleForm(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

function NewRegister(e){
    e.preventDefault()
    setDisabledButton(true)
      setNotSwitch(false)

    const body = {
        email: form.email,
        name: form.name,
        image: form.image,
        password: form.password
    }
    
        axios.post(`${URL}/auth/sign-up`, body)

        .then((res) => {
            setDisabledButton(false)
            setNotSwitch(true)
            navigate('/')
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

<form onSubmit={NewRegister}>
            <FormContainer>
                    <input
                        name='email'
                        value={form.email}
                        onChange={handleForm}
                        placeholder='email'
                        type='email'
                        disable={disabledButton}
                    />
                    <input
                        name='password'
                        value={form.password}
                        onChange={handleForm}
                        placeholder='senha'
                        type='password'
                        disable={disabledButton}
                    />
                    <input
                        name='name'
                        value={form.name}
                        onChange={handleForm}
                        placeholder='nome'
                        type='text'
                        disable={disabledButton}
                    />
                    <input
                        name="image"
                        value={form.image}
                        onChange={handleForm}
                        placeholder='foto'
                        type="url"
                        disable={disabledButton}
                    />
                    <button type='submit' disable={disabledButton}>
                    <ButtonContent visible={notSwitch}>
                        Cadastrar
                    </ButtonContent>
                    <ThreeDots color="white" visible={disabledButton} />
                    </button>
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
background-color: ${props => props.disable ? '#F2F2F2' : '#FFFFFF'};
color: ${props => props.disable ? '#AFAFAF' : '#DBDBDB'};
border: 1px solid #D5D5D5;
border-radius: 5px;
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
const LinkCadastro = styled.text`
margin-top: 25px;
font-size: 14px;
color: #52B6FF;
text-decoration-line: underline;
cursor: pointer;
`
const ButtonContent = styled.h1`
    display: ${props => props.visible ? 'contents' : 'none'};
`