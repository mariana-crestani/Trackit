import Header from '../components/Header.js';
import Footer from '../components/Footer';
import styled from 'styled-components';

export default function History(){

    return(
        <>
        <Header/>
        <HomeHabitContainer>
        <div>
        <h2>Histórico</h2>
        </div>
        <h3>Em breve você poderá ver o histórico dos seus hábitos aqui!</h3>
        </HomeHabitContainer>
        <Footer/>
        </>
    )
    }

const HomeHabitContainer = styled.div`
background-color: #F2F2F2;
margin-top: 70px;
margin-bottom: 100px;

div{
height: 85px;
display: flex;
justify-content: space-between;
align-items: center;
}

h2{
margin-left: 18px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 23px;
color: #126BA5;
}

h3{
margin-left: 18px;
margin-right: 18px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 18px;
color: #666666;
}
`