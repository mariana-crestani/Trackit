import styled from "styled-components"

export default function Login(){
return (
    <LoginContainer>
   <img src='../assets/images/Logo.png' alt='Logo'/>
   <img src='../assets/images/dog.jpeg' alt='dog'/>
   
   </LoginContainer>
    )
}

const LoginContainer =  styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`