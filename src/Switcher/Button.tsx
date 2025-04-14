type ButtonPropsType = {
    onClick?: () => void
    title: string
}

export function Button (props: ButtonPropsType) {
    return (
        <>
        <button onClick={props.onClick}>{props.title}</button>
        </>
    )
}