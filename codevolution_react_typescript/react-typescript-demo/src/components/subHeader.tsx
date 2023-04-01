type subHeaderProps={
    children: string
}

export const SubHeader = (props:subHeaderProps)=>{
    return(
        <div>{props.children}</div>
    )
}