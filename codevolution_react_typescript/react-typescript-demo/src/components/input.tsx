interface InputProps {
    changeHandler:(event:React.ChangeEvent<HTMLInputElement>)=>void;
}

export const Input = (props: InputProps) => {
    return (
        <div>
            <input type="text" onChange={props.changeHandler} />
        </div>
    );
}
