import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Story.css";
import harsh from "./harsh.JPG";
import anshul from "./anshul.JPG";
import raj from "./raj.JPG";
import gogo from "./gogo.JPG";
import snehil from "./snehil.jpg";

console.log(harsh);
console.log(anshul);
console.log(gogo);
console.log(raj);
console.log(snehil);



function Story({ image, profileSrc, title}) {
    return (
        <div style={{ backgroundImage: "url(" + image + ")" }} className="story">
            <Avatar src={profileSrc} />
            <h4>{title}</h4>
        </div>
    );
}

export default Story;