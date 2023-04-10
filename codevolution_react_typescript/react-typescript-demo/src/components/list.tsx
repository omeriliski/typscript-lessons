import { listTypes } from "./types";

// we can also use Object destructing
export const List = ({name}:listTypes) => {
    return (
        <div>
            <h1>{name.firstName}</h1>
            <h1>{name.lastName}</h1>
        </div>
    );
}
