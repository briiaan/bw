import {h, Fragment} from 'preact';
import {useState, useEffect} from 'preact/compat';
import Topnav from './Topnav';
import Middlenav from './Middlenav';
import Bottomnav from './Bottomnav';

export default function Header({phone, email}){
    const useWindowDimensions = () => {
        const hasWindow = typeof window !== "undefined"
    
        function getWindowDimensions() {
          const width = hasWindow ? window.innerWidth : null
          return {
            width
          }
        }
    
        const [windowDimensions, setWindowDimensions] = useState(
          getWindowDimensions()
        )
    
        useEffect(() => {
          if (hasWindow) {
            function handleResize() {
              setWindowDimensions(getWindowDimensions())
            }
    
            window.addEventListener("resize", handleResize)
            return () => window.removeEventListener("resize", handleResize)
          }
        }, [hasWindow])
    
        return windowDimensions
      }
    
    const {width} = useWindowDimensions();
    
    return (
        <>
        <div id='header-container'>
	        <Topnav email={email} phone={phone} width={width}/>
            <Middlenav width={width}/>
            <Bottomnav/>
            </div>

        </>
    )
}

