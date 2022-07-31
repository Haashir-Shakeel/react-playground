//Conditional Rendering
export const UserWelcome = () => {
    const isLoggedIn = false
    return (
        <div>
            {/* Welcome {isLoggedIn ? 'Bunny' : 'Guest'} */}
            Welcome {isLoggedIn && 'Bunny'}
        </div>
    )
}