import { Link } from "react-router-dom"

const NavBar = () => {
    return(
        <>
            <div>
                <div>
                    <img src="../../src/assets/react.svg" alt="" />
                </div>
                <div>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/content'}>Content</Link>
                    <Link to={'/shop'}>Shop</Link>
                    <Link to={'/work'}>Work</Link>

                </div>
            </div>
        </>
    )
}

export default NavBar