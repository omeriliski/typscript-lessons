import React from "react";

interface MyClassCompProps {
    message:string
}
 
interface MyClassCompState {
    count:number
}
 
export class MyClassComp extends React.Component<MyClassCompProps, MyClassCompState> {
    state = { 
        count:0  
    }
    handleClick = () => {
        this.setState((prevState)=>({count:prevState.count+1}))
    }
    render() { 
        return ( 
            <div>
                <button onClick={this.handleClick}>Inc</button>
                {this.props.message} {this.state.count}
            </div>
         );
    }
}
 