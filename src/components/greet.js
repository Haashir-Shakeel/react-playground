//using props
export const Welcome = (props) => {
    return (
        <div>
            <h1>Hello {props.name}</h1>
            {props.children}
        </div>
    )
}