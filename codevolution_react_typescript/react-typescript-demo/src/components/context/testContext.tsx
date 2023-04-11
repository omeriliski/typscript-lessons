import {createContext, useState} from "react";

type TestContextProps={
    children:React.ReactNode
}

export type TestContextType = {
    testFunction:(value:string)=>void;
    testValue:string;
    setTestValue:React.Dispatch<React.SetStateAction<string>>
}

// export const TestContext = createContext <TestContextType | null>(null);
export const TestContext = createContext({} as TestContextType);

export const TestContextProvider = ({children}: TestContextProps)=>{

    const [testValue, setTestValue] = useState("default test value");

    const testFunction = (value:string) => {
        console.log(value);
    }

    const variables={testFunction, testValue, setTestValue}

    return <TestContext.Provider value={variables}>
        {children}
    </TestContext.Provider>
} 