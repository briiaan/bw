import {h, Fragment} from 'preact';
import {useMemo, useState, useEffect, useRef} from 'preact/compat'
import '../styles/bottomnav.scss'

export default function Bottomnav(){

    return (
    <>
    <div id='bottom-container'>
        <nav id='nav-wrapper'>
       <div id='bottom-container-nav-bar'>
        <a href='/about-us' className='hover'>ABOUT US</a>
        <a href='/gallery' className='hover'>GALLERY</a>
        <a href='#services' className='hover'>WHAT WE DO</a>
        <a href='#' className='hover'>CONTACT</a>
       </div>
       </nav>
    </div>
    </>
    )
}