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
<h3>Cancelar</h3>
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
margin-top: 18px;
margin-bottom: 8px;
width: 303px;
height: 45px;
border: 1px solid #D4D4D4;
border-radius: 5px;
}
`

const WeekButtonContainer = styled.div`
button{
    margin-right: 4px;
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
border-radius: 5px;
}
`

const CancelSaveContainer = styled.div`
h3{
font-size: 16px;
color: #52B6FF;
cursor: pointer;
}

button{
width: 84px;
height: 35px;
border: 0px;
border-radius: 5px;
font-size: 16px;
color: #FFFFFF;
background-color: #52B6FF;
}
`