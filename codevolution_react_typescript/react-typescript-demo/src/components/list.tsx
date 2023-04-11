import { useContext, useEffect } from "react";
import { listTypes } from "./types";
import { TestContext } from "./context/testContext";

// we can also use Object destructing
export const List = ({name}:listTypes) => {
    const {testFunction, testValue} = useContext(TestContext);

    testFunction(testValue);

    return (
        <div>
            <h1>{name.firstName}</h1>
            <h1>{name.lastName}</h1>
        </div>
    );
}
