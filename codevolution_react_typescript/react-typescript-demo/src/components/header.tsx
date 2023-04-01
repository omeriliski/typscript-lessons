type headerProps = {
    text: string
}

export const Header=(props:headerProps)=>{
    return(
        <div>{props.text}</div>
    )
}