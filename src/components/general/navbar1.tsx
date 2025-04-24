import { Link } from 'react-router'
import logo from "../../assets/logo.png"

const Navbar1 = () => {
    return (
        <nav className="xl:px-20 lg:px-16 px-14 py-7 sticky z-40 top-0 w-full glass shadow-xl">
            <div className="flex flex-row items-center justify-between">
                <Link to="/"><img src={logo} alt="Logo Izicagn" title="Logo Izicagn" width={100} /></Link>
                <Link to="/login" className='font-bold'>Se connecter</Link>
            </div>
        </nav>
    )
}

export default Navbar1