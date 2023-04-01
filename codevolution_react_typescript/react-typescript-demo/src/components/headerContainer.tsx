type headerContainerType = {
    children:React.ReactNode;
}

export const HeaderContainer = ( props:headerContainerType ) =>{
    return(
        <div>{props.children}</div>
    )
}