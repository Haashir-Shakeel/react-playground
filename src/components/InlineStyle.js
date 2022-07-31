//Styling react components using inline styling

export const InlineStyling = () => {
    const heading = { //create an object to style and add to style attribute to apply
        fontSize: '72px',
        color: 'orange',

    }
    return <h1 style={heading}>Inline Style</h1>
}