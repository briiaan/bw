import {h, Fragment} from 'preact';
import background from "../images/bwgutter_photos/249720a7-ee02-4388-a383-98e041081047.jpg";
import '../styles/homepage.scss';

export default function Homepage(){
    return (
        <>
        <div id='main-container'>
            <img id="container-image-cover" src={background} alt="Modern Seattle House"/>
            <div id='main-container-introduction'>
                <p id='main'>YOUR #1 PROVIDER FOR GUTTER SERVICES IN THE PUDGET SOUND</p>
                <p id='sub-main'>SERVICES AVAILABLE IN SEATTLE, WA AND SURROUNDING AREAS</p>
                </div>
        </div>
        <div id='information-banner'>

            </div>
            <div id='gallery-showcase'>
                
            </div>
        </>
    )
}