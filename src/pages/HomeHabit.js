import Header from '../components/Header.js';
import Footer from '../components/Footer';
import styled from 'styled-components';
import axios from 'axios';
import { URL } from '../constants/URL.js';
import ContextLogin from '../constants/ContextLogin.js';
import { React, useEffect, useState , useContext} from 'react';
import CreateHabit from '../components/CreateHabit.js';
import Habit from '../components/Habit.js'

export default function HomeHabit(){

    const {user, setUser} = useContext(ContextLogin)
    const [load, setLoad] = useState(false)
    const [habitsList, setHabitsList] = useState([])
    const [createHabitClicked, setCreateHabitClicked] = useState(false)
    const [form, setForm] = useState({ name: '', days: [] })
    const [days, setDays] = useState([
        { value: 0, day: 'D', clicked: false },
        { value: 1, day: 'S', clicked: false },
        { value: 2, day: 'T', clicked: false },
        { value: 3, day: 'Q', clicked: false },
        { value: 4, day: 'Q', clicked: false },
        { value: 5, day: 'S', clicked: false },
        { value: 6, day: 'S', clicked: false },
    ]);

useEffect(() => {

    const config = {
        headers: {
            'Authorization': `Bearer ${user.token}`
        }
    }

    axios.get(`${URL}/habits`, config)

    .then((res) => {
       setHabitsList(res.data)
       setLoad(true)
       setUser(user)
    })

    .catch((err) => {
       alert(err.response.data)
    })
 }, [user.change])

if (load === false) {
    return <div>Carregando...</div>
 }

 function createHabit() {
    setCreateHabitClicked(!createHabitClicked)
}

if (habitsList.length === 0) {
    return(
<>
<Header/>
<HomeHabitContainer>
<div>
<h2 >Meus hábitos</h2>
<button onClick={createHabit}>+</button>
</div>
{createHabitClicked && <CreateHabit setCreateHabitClicked={setCreateHabitClicked} form={form} setForm={setForm} days={days} setDays={setDays}/>}
<Text>
<h3>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h3>
</Text>
</HomeHabitContainer>
<Footer/>
</>
    )
} else {
    return(
<>
<Header/>
<HomeHabitContainer>
<div>
<h2 >Meus hábitos</h2>
<button onClick={createHabit}>+</button>
</div>
{createHabitClicked && <CreateHabit setCreateHabitClicked={setCreateHabitClicked} form={form} setForm={setForm} days={days} setDays={setDays}/>}

{habitsList.map((habit) =>
               <Habit
                  key={habit.id}
                  id={habit.id}
                  name={habit.name}
                  days={habit.days}
    />)}
</HomeHabitContainer>
<Footer/>
</>
    )
}

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
cursor: pointer;
}
`

const Text = styled.div`
h3 {
margin-left: 18px;
margin-right: 18px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 18px;
color: #666666;
}`