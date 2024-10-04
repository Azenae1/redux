import React from "react";
import { decrement, incrementByAmount } from "../state/counter/counterSlice";
import { RootState } from "../state/store";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
    const count = useSelector((state:RootState) => state.counter.value);
    const dispatch = useDispatch();
    return(
        <div>
        <h2>{count}</h2>
        <div>
            <button onClick={() => dispatch(incrementByAmount(10))}>Increment by 10</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    </div>  
    );
}; 

export default Counter;