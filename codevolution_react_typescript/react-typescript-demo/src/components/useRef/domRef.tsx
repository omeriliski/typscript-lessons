import { useRef, useEffect } from "react";

export const DomRef = () => {

    // we musst only add here <HTMLInputElement>
    const inputRef = useRef<HTMLInputElement>(null!);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <input type="text" ref={inputRef}/>
        </div>
    );
}