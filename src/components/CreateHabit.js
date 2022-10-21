import styled from "styled-components";

export default function CreateHabit(){

function handleForm(){

}

return(
<CreateHabitContainer>
<input  
name='name'
value={''}
onChange={handleForm}
type='text' 
placeholder='Nome do hábito'
/>

<WeekButtonContainer>
<button>D</button>
<button>S</button>
<button>T</button>
<button>Q</button>
<button>Q</button>
<button>S</button>
<button>S</button>
</WeekButtonContainer>

<CancelSaveContainer>
<button>Cancelar</button>
<button>Salvar</button>
</CancelSaveContainer>
</CreateHabitContainer>
)
}

const CreateHabitContainer= styled.div`
width: 340px;
height: 180px;
margin-left: auto;
margin-right: auto;
background-color: #FFFFFF;
border-radius: 5px;
//margin-top: 70px;
//margin-bottom: 100px;
display: flex;
flex-direction: column;

input{
width: 303px;
height: 45px;
}
`

const WeekButtonContainer = styled.div`
button{
width: 30px;
height: 30px;
border: 1px solid #D4D4D4;
border-radius: 5px;
background-color: #FFFFFF;// ou #D4D4D4 
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20px;
color: #D4D4D4;  //ou #FFFFFF
}
`

const CancelSaveContainer = styled.div`
button{
    width: 84px;
height: 35px;
border: 1px solid #D4D4D4;
border-radius: 5px;
background-color: #FFFFFF;// ou #D4D4D4 
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20px;
color: #D4D4D4;  //ou #FFFFFF
}
`