

const NavButton = ({ children, className }) => {
    return (
        <div className={`navbar-item border-1 border-black p-5 rounded-xl ${className}`}>
            {children}
        </div>
    )
}

export default NavButton