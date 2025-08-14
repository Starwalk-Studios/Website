import NavButton from "./reusable/NavButton"

const Navbar = () => {
    return (
        <>
        <div className="navbar z-100 gap-1.5 fixed bottom-0 left-[50%] translate-x-[-50%]  flex fixed p-2 rounded-xl">
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
                Future@StarWalk
            </NavButton>
        </div>
    </>
    )
}

export default Navbar