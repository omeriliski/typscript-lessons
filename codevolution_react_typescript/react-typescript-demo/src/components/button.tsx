type buttonProps = {
    handleClick:(event:React.MouseEvent<HTMLButtonElement>)=>void,
    style:React.CSSProperties
}
 
export const Button = (props:buttonProps) => {
    return ( 
        <div>
            <button onClick={props.handleClick} style={props.style}>Save</button>
        </div>
     );
}
 
