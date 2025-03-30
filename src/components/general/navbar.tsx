import logo from "/src/assets/logo.png"

const Navbar = () => {
    return (
        <div>
            <nav className="bg-[#F0F2F29E]">
                <a href=""><img src={logo} alt="" /></a>
                <ul className="flex">
                    <li><a href="">Découvrir</a></li>
                    <li><a href="">Comment ça marche ?</a></li>
                    <li><a href="">Lever des fonds</a></li>
                    <li><a href="">Mon espace</a></li>
                    <li><a href="">Démarrer</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar