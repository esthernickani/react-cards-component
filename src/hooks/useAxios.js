import React, { useState } from "react";
import axios from "axios"
import {v1 as uuid} from "uuid";

async function useAxios (url) {
    const [ cards, setCards ] = useState([]);
    console.log(cards)
    const response = await axios.get(url);
    const addCard = () => {
        setCards(cards => [...cards, { ...response.data, id: uuid() }]);
    }


    return [cards, addCard]
};

export default useAxios;