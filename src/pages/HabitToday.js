import Header from '../components/Header.js';
import Footer from '../components/Footer';
import styled from 'styled-components';
import axios from 'axios';
import { URL } from '../constants/URL.js';
import ContextLogin from '../constants/ContextLogin.js';
import { React, useEffect, useState , useContext} from 'react';
import TodayHabit from '../components/TodayHabit.js';
import * as dayjs from "dayjs";

export default function HabitToday(){

    const [load, setLoad] = useState(false)
    const {user, setUser} = useContext(ContextLogin)
    const [habitsToday, setHabitsToday] = useState([])
    const dayOfWeek = dayjs().day()
    const dayOfMonth = dayjs().date()
    const monthOfYear = dayjs().month() + 1
    
    let week = undefined;
    switch (dayOfWeek) {
        case 0:
            week = 'Domingo'
            break;
        case 1:
            week = 'Segunda'
            break;
        case 2:
            week = 'Terça'
            break;
        case 3:
            week = 'Quarta'
            break;
        case 4:
            week = 'Quinta'
            break;
        case 5:
            week = 'Sexta'
            break;
        case 6:
            week = 'Sábado'
            break;
        default:
            alert('Dia da semana falhou em carregar!')
            break;
    }

    useEffect(() => {
        const config = {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }
    
        axios.get(`${URL}/habits/today`, config)
    
        .then((res) => {
           setHabitsToday(res.data)
           progress(res.data)
            setLoad(true)
        })
    
        .catch((err) => {
           alert(err.response.data.message)
        })
     }, [])


     function progress(p) {
        const pFiltered = p.filter((e) => { if (e.done === true) return true })
        let progress = (pFiltered.length/p.length*100).toFixed()
        const newUser = {...user,progress:progress}
        setUser(newUser);
    }

     if (load === false) {
        return <div>Carregando...</div>
     }
if(habitsToday.length === 0){
    return (
        <>
            <Header />
            <HabitTodayContainer>
                <ContainerNewHabit>
                    <h1>{week}, {dayOfMonth}/{monthOfYear}</h1>
                    <h3>Nenhum hábito concluído ainda</h3>
                </ContainerNewHabit>
                <Text>
                    <h1>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </h1>
                </Text>
                </HabitTodayContainer>
            <Footer />
        </>
    )
} else {
    return(
    <>
    <Header/>
    
    <HabitTodayContainer>
                <ContainerNewHabit>
                    <h1>{week}, {dayOfMonth}/{monthOfYear}</h1>
                    {habitsToday.some(h => h.done === true) ? <h2>{user.progress}% dos hábitos concluídos</h2> : <h3> Nenhum hábito concluído ainda</h3>}
                </ContainerNewHabit>
                <Text>
                {habitsToday.map((e) => <TodayHabit
                            key={e.id}
                            id={e.id}
                            name={e.name}
                            done={e.done}
                            currentSequence={e.currentSequence}
                            highestSequence={e.highestSequence}
                        />)}
                </Text>
                </HabitTodayContainer>

    <Footer/>
    </>
)}

} 
    
const HabitTodayContainer = styled.div`
background-color: #F2F2F2;
margin-top: 70px;
margin-bottom: 100px;
`

    const ContainerNewHabit = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }
    h2{
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #8FC549;
    }
    h3{
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #BABABA;
    }
`

const Text = styled.div`
    margin-top: 28px;
    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #666666;
    }
`