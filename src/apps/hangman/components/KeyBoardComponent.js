import React from 'react'
import { useKeyBoard } from '../hooks/useKeyBoard';
import { KeyComponent } from './KeyComponent';

export const KeyBoardComponent = ({ handlerKeyPress }) => {
    const [keyBoard, setKeyBoard] = useKeyBoard();
    const handlerkey = (key) => {
        const newKeyBoard = keyBoard.map(item =>{
            const {key: keylist} = item;
            if(key === keylist){
                item.status = true;
            }
            return item;
        });
        setKeyBoard(newKeyBoard);
        handlerKeyPress(key);
    };
    return ( <div className="flex-container">
        {keyBoard.map((item) => (
            <KeyComponent 
            key={item.id} 
            letter={item.key} 
            handlerkey={handlerkey} 
            status={item.status}
            />
        ))}
    </div>
    );
};
