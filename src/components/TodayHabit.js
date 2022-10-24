import axios from 'axios';
import { useContext} from 'react';
import styled from 'styled-components';
import Checkbox from '../assets/images/Checkbox.svg';
import { URL } from '../constants/URL.js';
import ContextLogin from '../constants/ContextLogin.js';

export default function TodayHabit({name, currentSequence, highestSequence, id, done }){

    const { user, setUser } = useContext(ContextLogin);

    function HabitCheck() {

        if (done) {
            const config = {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            }

            axios.post(`${URL}/habits/${id}/uncheck`, {}, config)
                .then(res => {
                    const newUser = { ...user }
                    newUser.change = !newUser.change
                    setUser(newUser)
                })
                .catch(err => {
                    alert(err.response.data.message)
                })
        } 
        else {

            const config = {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            }

            axios.post(`${URL}/habits/${id}/check`, {}, config)
                .then(res => {
                    const newUser = { ...user }
                    newUser.change = !newUser.change
                    setUser(newUser)
                    console.log('post no today deu certo', newUser)
                })
                .catch(err => {
                    alert(err.response.data.message)
                })
        }
    }

    return(
        <Container>
        <StyledLeft isEqual={currentSequence === highestSequence} done={done} highestSequence={highestSequence}>
            <h1>{name}</h1>
            <h2>Sequência atual: <StyledActualDay>{currentSequence} dias</StyledActualDay></h2>
            <h2>Seu recorde: <StyledRecordDay>{highestSequence} dias</StyledRecordDay></h2>
        </StyledLeft>
        <StyledRight>
            <StyledCheckBox done={done} src={Checkbox} onClick={HabitCheck}>
            </StyledCheckBox >
        </StyledRight>
    </Container>

    )
}

const StyledActualDay = styled.span`
    color:red;
`
const StyledRecordDay = styled.span`
    color:red;
`

const StyledCheckBox = styled.img`
color: ${props => props.done === true ? '#8FC549' : '#E7E7E7'};
`
const Container = styled.div`
    border-radius: 5px;
    box-sizing: border-box;
    padding: 10px;
    background-color: #FFF;
    width: 100%;
    height: 94px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledLeft = styled.div`
        display: flex ;
        flex-direction: column;
        align-items: flex-start;
    h1{
        margin-bottom: 5px;
        font-size: 20px;
        color: #666666;
    }
    h2{
        margin-bottom: 2px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        color: #666666;
    }
    ${StyledActualDay}{
        color: ${props => props.done ? '#8FC549' : '#666666'} ;
    }
    ${StyledRecordDay}{
        color: ${props => props.isEqual && props.highestSequence !== 0 ? '#8FC549' : '#666666'} ;
    }
`
const StyledRight = styled.div`
    button{
        width: 69px;
        height: 69px;
    }
`