//passing/using props/function from parent to child
export const ChildComponent = (props) => {
    return (
        <div>
            <button onClick={() => props.welcomeHandler('child')}>Welcome Parent</button>
        </div>
    )
}