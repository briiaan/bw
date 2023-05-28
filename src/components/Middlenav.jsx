import {h, Fragment} from 'preact';
import {useRef, useState, useEffect} from 'preact/compat'
import '../styles/middlenav.scss';
import '../styles/default.scss'
import logo from '../images/bw_gutter_logo.png';

export default function Middlenav({width}){
  const sideMenu = useRef(null);
  const[isOpen, setOpen] = useState(false);

    const isClicked = () => {
        if(!isOpen) {
          setOpen(true);
          sideMenu.current.className = "side-menu";
          sideMenu.current.style.animation = "0.9s forwards sun-rise";
  
          
        } else {
           setOpen(false)
           sideMenu.current.style.animation = "0.9s forwards sun-rise-reverse";
        }
    }
    
    useEffect(() => {
      if (width > 900 && isOpen) {
        sideMenu.current.className = "hidden";
      } else if (isOpen) {
        sideMenu.current.className = "side-menu";
      }
    }, [width])

    return (
    <>
    <div id='middle-container'>
        <div id='logo-container'>
            <a href='/'>
                <img src={logo.src} className='responsive' width={291} height={80} role="img"/>
            </a>
        </div>
        <div id='button-container'>
            <div id='menu' className='pointer' onClick={isClicked}>
            <svg fill="#000000" width="100px" height="100px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g data-name="Layer 2"> <g data-name="menu"> <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect> <rect x="3" y="11" width="18" height="0.5" rx=".95" ry=".95"></rect> <rect x="3" y="16" width="18" height="0.5" rx=".95" ry=".95"></rect> <rect x="3" y="6" width="18" height="0.5" rx=".95" ry=".95"></rect> </g> </g> </g></svg>
            </div>
        </div>
        <div id='side-menu' className='hidden' ref={sideMenu}>
            <ul>
                <a href="/about-us">ABOUT US</a>
                <a href="/gallery">GALLERY</a>
                <a href="/#services">WHAT WE DO</a>
                <a href="">CONTACT</a>
            </ul>
        </div>
    </div>
    </>
    )
}