import Header from '../components/Header.js';
import Footer from '../components/Footer';
import styled from 'styled-components';
import axios from 'axios';
import { URL } from '../constants/URL.js';
import ContextLogin from '../constants/ContextLogin.js';
import { React, useEffect, useState , useContext} from 'react';

export default function HabitToday(){

    const {user, setUser} = useContext(ContextLogin)

    /*
    [
    {
        "id": 3,
        "name": "Acordar",
        "done": true,
        "currentSequence": 1,
        "highestSequence": 1
    }
]
    */
    useEffect(() => {
        const config = {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }
    
        axios.get(`${URL}/habits/today`, config)
    
        .then((res) => {
           setHabitsList(res.data)
           setLoad(true)
           setUser(user)
        })
    
        .catch((err) => {
           alert(err.response.data)
        })
     }, [])


    return(
        <>
        <Header/>
        
        <Footer/>
        </>
    )
    }