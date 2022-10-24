import styled from "styled-components";


export default function WeekButton({ children, clicked, value, days, setDays, setForm, form, disabled }) {

    function weekButtonClicked() {
        const newArr = [...days]
        for (let i = 0; i < newArr.length; i++) {
            if (newArr[i].value === value) {
                newArr[i].clicked = !newArr[i].clicked
            }
        }
        
        let newDays = newArr.filter(e => {
            if (e.clicked === true) {
            }return true
        })

        const daysNumbers = []
        for (let i = 0; i < newDays.length; i++) {
            daysNumbers.push(newDays[i].value)
        }
        setForm({ ...form, days: daysNumbers })
        setDays(newArr)
    }

return(
<WeekDay type="button" clicked={clicked} onClick={weekButtonClicked} disabled={disabled}>{children}</WeekDay>

)
}

const WeekDay = styled.button`
margin-right: 4px;
width: 30px;
height: 30px;
border: 1px solid #D5D5D5;
border-radius: 5px;
background-color: ${props => props.clicked ? '#CFCFCF' : '#FFFFFF'};
color: ${props => props.clicked ? '#FFFFFF' : '#DBDBDB'};
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20px;
border-radius: 5px;
`