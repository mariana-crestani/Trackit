import Header from '../components/Header.js';
import Footer from '../components/Footer';
import styled from 'styled-components';
import CreateHabit from '../components/CreateHabit.js';

export default function HomeHabit(){

//https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits

/*{
	name: "Nome do hábito",
	days: [1, 3, 5] // segunda, quarta e sexta
} */


    return(
<>
<Header/>
<HomeHabitContainer>
<div>
<h2>Meus hábitos</h2>
<button>+</button>
</div>
<CreateHabit/>
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