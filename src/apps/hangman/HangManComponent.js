import React, { useState } from 'react'
import { DrawComponent } from './components/DrawComponent';
import { KeyBoardComponent } from './components/KeyBoardComponent';
import { WordComponent } from './components/WordComponent';
import { useCounter } from './hooks/useCounter';
import { useWord } from './hooks/useWord';
import "./styles.css";
export const HangManComponent = () => {
    const [listWord, setListWord, ifContains, isValid] = useWord("redbull");
    const [counter, , decrementCounter] = useCounter(6, {max: 6, min: 0 });
    const handlerKeyPress = (key) => {
        ifContains(key);
        if(!isValid(key)){
            decrementCounter();
        }
    };
    return (
        <div>
            <h1>HangMan</h1>
            <hr />
            <DrawComponent counter={counter}/>
            <WordComponent listWord={listWord}/>
            <KeyBoardComponent handlerKeyPress={handlerKeyPress} />
        </div>
    )
}
