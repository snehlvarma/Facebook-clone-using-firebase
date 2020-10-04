import React from 'react';
import Story from './Story';
import "./StoryReel.css";
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


function StoryReel() {
    return( <div className="StoryReel">;
            <Story
              image={harsh}
              profileSrc={harsh}
              title="Harsh Kakroo"
            />
            <Story
              image={anshul}
              profileSrc={anshul}
              title="Anshul Sood"
            />
            <Story
              image={gogo}
              profileSrc={gogo}
              title="Anubhav Gogo"
            />
            <Story
              image={raj}
              profileSrc={raj}
              title="Rajkaushik Borgohan"
            />
            <Story
              image={snehil}
              profileSrc={snehil}
              title="Snehil Verma"
            />















        </div>
    )
}

export default StoryReel;
