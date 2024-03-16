import React, { useEffect, useState } from "react";
import axios from "axios"
import {v1 as uuid} from "uuid";

 function useAxios (url) {
    const [cards, setCards] = useState([]);
    const addCard = async () => {
      const response = await axios.get(url);
      setCards(cards => [...cards, { ...response.data, id: uuid() }]);
    };

    return [cards, addCard]
};

export default useAxios;