import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function Course(props) {
    const courseName = props.match.params.coursename
    const Courses={
        reactjs:[
            {title:"reactjs title 1",vid:"o8jEBYOu9dA"},
            {title:"reactjs title 2",vid:"edblCnJhvdI"},
            {title:"reactjs title 3",vid:"MXZvQuG5mQc"}

        ],
        nodejs:[
            {title:"nodejs title 1",vid:"TlB_eWDSMt4"},
            {title:"nodejs title 2",vid:"W6NZfCO5SIk"},
            {title:"nodejs title 3",vid:"oxoFVqetl1E"}
        ],

    }

    const[vid,uid]=useState(Courses[courseName][0].vid)
    const[title,utit]=useState(Courses[courseName][0].title)

    const renderVideo =()=>{
        return(
            <div class="video-container">
            <iframe width="853" height="480" src={"//www.youtube.com/embed/"+vid+"?rel=0"} frameBorder="0" allowFullScreen></iframe>
          </div>
            
        )
        
    }
  return (
    <div>
     
     <h1>{courseName}</h1>
     {renderVideo()}
     <div className="collection">
         {
             Courses[courseName].map(item=>{
                
                return <a href="#!" class="collection-item" onClick={()=>{
                    uid(item.vid)
                    utit(item.title)

                }}>{item.title}</a>
                
              
                    
             })
         }

     </div>
    </div>
  );
}

export default Course;
