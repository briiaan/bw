import {h, Fragment} from 'preact';
import {useMemo, useEffect, useState} from 'preact/compat'
import "../styles/topnav.scss";

export default function Topnav({phone, email, width}){
    
    const icon_width = '28px';
    const tablet = 900;
    const phone_parser = (phone) => {
        let phonelist=phone.split('');
         phonelist.splice(phonelist.indexOf('-'), 1, ') ');
         phonelist.unshift("(");
         return phonelist.join('');
       }
    const cachePhone = useMemo(() => {return phone_parser(phone)}, [phone]);
    const email_href = "mailto:" + email;
    const phone_href = "tel:" + phone;
    return (
        <>
        <div className='full-width background-black flex' id='top-nav-container'>
            <div id='call-container'>
                <a href={width < tablet ? phone_href : null}>
            <div id="call" className='flex'><div id="phone-icon" className='flex'><svg fill="#ffffff" width={icon_width} height={icon_width} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11.748 5.773S11.418 5 10.914 5c-.496 0-.754.229-.926.387S6.938 7.91 6.938 7.91s-.837.731-.773 2.106c.054 1.375.323 3.332 1.719 6.058 1.386 2.72 4.855 6.876 7.047 8.337 0 0 2.031 1.558 3.921 2.191.549.173 1.647.398 1.903.398.26 0 .719 0 1.246-.385.536-.389 3.543-2.807 3.543-2.807s.736-.665-.119-1.438c-.859-.773-3.467-2.492-4.025-2.944-.559-.459-1.355-.257-1.699.054-.343.313-.956.828-1.031.893-.112.086-.419.365-.763.226-.438-.173-2.234-1.148-3.899-3.426-1.655-2.276-1.837-3.02-2.084-3.824a.56.56 0 0 1 .225-.657c.248-.172 1.161-.933 1.161-.933s.591-.583.344-1.27-1.906-4.716-1.906-4.716z"></path></g></svg></div><a id='a-phone' href={ width >= tablet ? phone_href : null}>{cachePhone}</a></div>
            </a>
            </div>
            <div id='divider'></div>
            <div id='email-container'>
                <a href={width < tablet ? email_href : null}>
            <div id="email" className='flex'><div id='mail-icon' className='flex'><svg fill="#ffffff" width={icon_width} height={icon_width} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22,5V9L12,13,2,9V5A1,1,0,0,1,3,4H21A1,1,0,0,1,22,5ZM2,11.154V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V11.154l-10,4Z"></path></g></svg></div><a id='a-email' href={width > tablet ? email_href : null}>{email}</a></div>
            </a>
            </div>
        </div>
        </>
    );
}