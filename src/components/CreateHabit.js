import styled from "styled-components"


export default function CreateHabit(){

    return(
        <>
        <HomeHabitContainer>
        <h3>Em breve você poderá criar seus hábitos aqui!</h3>
        </HomeHabitContainer>
        </>
    )
    }

const HomeHabitContainer = styled.div`
background-color: #F2F2F2;
margin-top: 70px;
margin-bottom: 100px;

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