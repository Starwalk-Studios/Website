

const NavButton = ({ children, className }) => {
    return (
        <a href="" target="_blank" className={`navbar-item border-1 border-white duration-100 hover:bg-white hover:shadow-[0_0_1rem_0rem] shadow-white hover:text-black hover:font-bold py-4 px-5  ${className}`}>
            {children}
        </a>
    )
}

export default NavButton