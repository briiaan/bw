import {h, Fragment} from 'preact';
import '../styles/footer.scss';

export default function Footer(){
    return (
        <>
        <div id='footer'>
            <div id='pages'>
                <a href="/">Home</a>
                <a href="/about-us">About Us</a>
                <a href="#">What We Do</a>
                <a href="#">Contact</a>
                <a href="/privacy-policy">Privacy Policy</a>
            </div>
            <div id='copyright-container'>
                <p id='copyright-text'>©Bw Gutter Installation Servs</p>
            </div>
        </div>
        </>
    )
}