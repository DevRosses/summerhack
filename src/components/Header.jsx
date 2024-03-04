import '../assets/style/Header.css'
import Logo from '../assets/statics/POPCORN.svg'

function Header() {
    return (
        <>
            <div className="header">
                <img src={Logo} alt='popcorn logo' className='logo' />
            </div>
        </>
    );
}

export default Header;