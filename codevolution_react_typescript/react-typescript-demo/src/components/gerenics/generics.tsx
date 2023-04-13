import React, { ReactNode } from "react";

type GenericsProps <T> = {
    items:T[]
}
 
export const Generics= <T extends string>({items}:GenericsProps<T>) => {
    return ( 
        <div>
            {items.map((item, index: number) => (
                <p key={index}>{item}</p>
            ))}
        </div>
     );
}
 