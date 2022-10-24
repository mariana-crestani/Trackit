import { React} from 'react';
import styled from 'styled-components';
import trash from '../assets/images/trash.svg';

export default function Habit({name, days, id}){

console.log('days', days)

    const habitDays = [
        { value: 0, day: 'D' },
        { value: 1, day: 'S' },
        { value: 2, day: 'T' },
        { value: 3, day: 'Q' },
        { value: 4, day: 'Q' },
        { value: 5, day: 'S' },
        { value: 6, day: 'S' },
    ]

function deletHabit(id){
  //  confirm('Deseja mesmo deletar este hábito?');
/*
        if (!terminadas.includes(index)) {
            const novoArray = [...terminadas, index]
            setTerminadas(novoArray)
            const tarefasQueFaltam = tarefas.length - novoArray.length
            // alert(`Parabéns! Agora só faltam ${tarefasQueFaltam} tarefas`)
        }  
*/

}

function dayIsSelected(value){

    for (let i = 0; i < days.length; i++) {
       if (days[i] === value)
                return true;
            }
}

return(
<HabitContainer>
<Title>
<h2>{name}</h2>
<img onclick={() => deletHabit(id)} src={trash} alt='lixeira'/>
</Title>
<WeekButtonContainer>
    {habitDays.map((d) => <button key={d.value} value={d.value} dayIsSelected={dayIsSelected(d.value)}>{d.day}</button>)}
</WeekButtonContainer>

</HabitContainer>

)
}

const HabitContainer= styled.div`
width:340px;
height:91px;
margin-left: auto;
margin-right: auto;
margin-bottom: 10px;
background-color: #FFFFFF;
border-radius: 5px;
display: flex;
flex-direction: column;
`

const Title = styled.div`
display: flex;

img{
margin-right: 10px;
color:#666666;
width: 13px;
height: 15px;
}

h2{
margin-left: -15px;
color: #666666;
font-size: 20px;
}
`

const WeekButtonContainer = styled.div`

button{
    margin-right: 4px;
width: 30px;
height: 30px;
border: 1px solid #D4D4D4;
border-radius: 5px;
background-color: ${props => props.dayIsSelected ? '#CFCFCF': '#FFFFFF'};
color: ${props => props.dayIsSelected ? '#FFFFFF': '#D4D4D4'};
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20px;
border-radius: 5px;
}
`