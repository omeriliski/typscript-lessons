import { CustomButton } from "./button";

export const CustomButton2 = ({variant, children, ...rest}: React.ComponentProps<typeof CustomButton>) => {
    return ( 
        <button className={`class-with-${variant}`} {...rest}>{children}</button>
     );
}