import Header from '../components/Header.js';
import Footer from '../components/Footer';
import styled from 'styled-components';
import axios from 'axios';
import { URL } from '../constants/URL.js';
import Context from '../constants/ContextLogin.js';
import { React, useEffect, useState , useContext} from 'react';
//import CreateHabit from '../components/CreateHabit.js';
import Habit from '../components/Habit.js'

export default function HomeHabit(){

    const {user} = useContext(Context)
    const [habitsList, setHabitsList] = useState([])

/*{
	name: "Nome do hábito",
	days: [1, 3, 5] // segunda, quarta e sexta
} */

useEffect(() => {

    const config = {
        headers: {
            'Authorization': `Bearer ${user.token}`
        }
    }

    axios.get(`${URL}/habits`, config)

    .then((res) => {
       console.log('habits', res.data)
       setHabitsList(res.data)
    })

    .catch((err) => {
       console.log(err.response.data)
       alert(err.response.data)
    })
 }, [])

/* if (movies.lenght === 0) {
    return <div>Carregando...</div>
 }
*/

    return(
<>
<Header/>
<HomeHabitContainer>
<div>
<h2>Meus hábitos</h2>
<button>+</button>
</div>
{/*<CreateHabit/>*/}

{habitsList.map((habit) =>
               <Habit
                  key={habit.id}
                  id={habit.id}
                  name={habit.name}
                  days={habit.days}
               />)}
<h3>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h3>
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

button{
margin-right: 18px;
width: 40px;
height: 35px;
border-radius: 5px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 27px;
color: #FFFFFF;
background-color: #52B6FF;
border: 0px;
}

h3 {
margin-left: 18px;
margin-right: 18px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 18px;
color: #666666;
}
`