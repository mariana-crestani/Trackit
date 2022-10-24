import axios from "axios";
import styled from "styled-components";
import ContextLogin from '../constants/ContextLogin.js';
import { React, useContext, useState, useEffect } from 'react';
import WeekButton from './WeekButton'
import { URL } from '../constants/URL.js';

export default function CreateHabit(setCreateHabitClicked, form, setForm, days, setDays) {

    const { user, setUser } = useContext(ContextLogin)
    const [disabledButton, setDisabledButton] = useState(false);
    const [notSwitch, setNotSwitch] = useState(true);

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function onSubmit(e) {
        e.preventDefault()

        if (form.days.length === 0) {
            alert('Selecion ao menos um dia!')
            setDisabledButton(false)
            setNotSwitch(true)
        } else {
            setDisabledButton(true)
            setNotSwitch(false)
        }
    }

    useEffect(() => {
        const config = {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }
    
    axios.post(`${URL}/habits`, form, config)
    
        .then(res => {
            setDisabledButton(false)
            setCreateHabitClicked(false)
            setNotSwitch(true)
            setForm({ name: '', days: [] })
            setUser({ ...user, change: !user.change })
            setDays(
                [
                    { value: 0, day: 'D', clicked: false },
                    { value: 1, day: 'S', clicked: false },
                    { value: 2, day: 'T', clicked: false },
                    { value: 3, day: 'Q', clicked: false },
                    { value: 4, day: 'Q', clicked: false },
                    { value: 5, day: 'S', clicked: false },
                    { value: 6, day: 'S', clicked: false },
                ]
            )
        })
    
        .catch(err => {
            alert(err.response)
            setDisabledButton(false)
            setNotSwitch(true)
        })
    })

    return (
        <CreateHabitContainer>
            <form onSubmit={onSubmit}>

                <input
                    required
                    name='name'
                    value={form.name}
                    onChange={handleForm}
                    type='text'
                    placeholder='nome do hábito'
                    disabled={disabledButton}
                />

                <WeekButtonContainer>
                    {days.map((d) =>
                        <WeekButton
                            key={d.value}
                            clicked={d.clicked}
                            value={d.value}
                            days={days}
                            setDays={setDays}
                            setForm={setForm}
                            form={form}
                            disabled={disabledButton}
                        >
                            {d.day}
                        </WeekButton>)}
                </WeekButtonContainer>

                <CancelSaveContainer>
                    <h3 type="button" onClick={() => setCreateHabitClicked(false)} disabled={disabledButton}>Cancelar</h3>
                    <button disabled={disabledButton} type="submit" visible={notSwitch}>Salvar</button>
                </CancelSaveContainer>
            </form>
        </CreateHabitContainer>
    )
}

const CreateHabitContainer = styled.div`
width: 340px;
height: 180px;
margin-left: auto;
margin-right: auto;
background-color: red;//#FFFFFF;
border-radius: 5px;
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