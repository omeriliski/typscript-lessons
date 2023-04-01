type todoStateProp={
    state:"new" |"progressing" |"done"
}

export const TodoState = (props:todoStateProp)=>{
    return(
        <div>{props.state}</div>
    )
}