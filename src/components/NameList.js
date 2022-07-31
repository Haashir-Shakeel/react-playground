//rendering a list of items using array.map()
export const NameList = () => {
    const names = ['Clark', 'Brian', 'Aamanda', 'Sarah']
    return (
        <div>
            {names.map((name) => {
                return <h2 key={name}>{name}</h2>
            })}
        </div>
    )
}