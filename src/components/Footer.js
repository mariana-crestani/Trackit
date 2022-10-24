import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import ContextLogin from '../constants/ContextLogin.js';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';

export default function Footer() {

    const {user} = useContext(ContextLogin)
    const percentage = user.progress;

    return (
        <FooterContainer>
            <Container>

                <Link to={`/habitos`} style={{ textDecoration: 'none' }}><h2>Hábitos</h2></Link>

                <Link to={`/hoje`} style={{ textDecoration: 'none' }}>
                    <button>
                <CircularProgressbarWithChildren
                            value={percentage}
                            text={'Hoje'}
                            styles={buildStyles({
                                backgroundColor: "#52B6FF",
                                textColor: "#FFFFFF",
                                pathColor: "#FFFFFF",
                                trailColor: "transparent"
                            })}
                        />
                </button>
                </Link>

                <Link to={`/historico`} style={{ textDecoration: 'none' }}><h2>Histórico</h2></Link>

            </Container>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
background-color: #F2F2F2;
width: 100%;
height: 100px;
bottom: 0px;
position: fixed;
z-index: 1;
`
const Container = styled.div`
background-color: #FFFFFF;
width: 100%;
height: 70px;
bottom: 0px;
display: flex;
position: fixed;
justify-content: space-around;
align-items: center;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 18px;

button{
margin-bottom: 40px;
width: 90px;
height: 90px;
background-color: #52B6FF;
border-radius: 100%;
color: #FFFFFF;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 18px;
border: 0px;
}

h2{
color: #52B6FF;
}
`