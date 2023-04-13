type HorizontalProps = "left" | "center" | "right";
type VerticalProps = "top" | "center" | "bottom";

type PositionProps={
    position: Exclude<`${HorizontalProps}-${VerticalProps}`,"center-center"> | "center";
}

export const TemplateLiterals = ({position}:PositionProps) => {
    return ( 
        <div>position: {position}</div>
     )
}