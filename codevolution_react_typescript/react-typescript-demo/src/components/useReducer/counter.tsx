import { useReducer } from "react";

type CounterState = {
    count:number
}

type UpdateAction = {
    // type: string,
    type:"inc" | "dec",
    payload:number
}

type ResetAction = {
    type:"reset"
}

type CounterAction = UpdateAction | ResetAction;

const initialState = {
    count:0
}

const reducer = (state:CounterState, action:CounterAction)=>{
    switch (action.type) {
        case "inc":
            return { count: state.count + action.payload }
        case "dec":
            return { count: state.count - action.payload }
        case "reset":
            return initialState
        default:
            return state;
    }
}

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>count:{state.count}</h1>
            <button onClick={()=>dispatch({type:"inc", payload:10})}>inc 10</button>    {/* dispatch(action) */}
            <button onClick={()=>dispatch({type:"dec", payload:10})}>dec 10</button>
            <button onClick={()=>dispatch({type:"reset" })}>reset</button>
        </div>
    );
}
