import nav from './Navbar.module.css';
import logo from '../exports/logo.png'
const Navbar = () => {
    return (
        <div className={nav.nav}>
            <div className={nav.main}>
            <div className={nav.container}>
                <div className={`${nav.item} ${nav.one}`}>
                       <div className={nav.logo_continer}>
                           <div className={nav.imgContainer}>
                           <img className={nav.logo} src={logo} alt="" />
                           </div>

                            <div>
                               <span className={nav.logoTitle}>WEBGENIX</span>
                               <br />
                                <span className={nav.sub_title}>Your One-stop Web Solution</span>
                            </div>
                       </div>
                </div>
                <div className={`${nav.item} ${nav.two}`}>
                   <div className={nav.optionContaier}>
                    <ul>
                        <li id='home'>
                            Home
                        </li>
                        <li id='#works'>
                            Works
                        </li>
                        <li>
                            Service
                        </li>
                        <li>
                           Projects
                        </li>
                    </ul>
                   </div>
                </div>
            </div>
            <div className={nav.line}></div>
        </div>
        </div>
    );
};

export default Navbar;