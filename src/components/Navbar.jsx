import NavButton from "./reusable/NavButton"

const Navbar = () => {
    return (
        <div className="navbar z-100 gap-1.5 fixed bottom-15 left-[50%] translate-x-[-50%] bg-gray-100/30 backdrop-blur-sm flex fixed p-2 rounded-xl">
            <NavButton>
                Vision
            </NavButton>
            <NavButton>
                Work
            </NavButton>
            <NavButton>
                Developers
            </NavButton>
            <NavButton> 
                Life@StarWalk
            </NavButton>
        </div>
    )
}

export default Navbar