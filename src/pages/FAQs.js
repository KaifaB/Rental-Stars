import React from 'react';

const FAQs = (props) => {
    return(
        <div className="FAQs">
            {props.data.map((curr)=>{
                return(
                    <div className="single">
                        <div className="quest">Q: {curr.Q}</div>
                        <div className="ans">A: {curr.A}</div>
                    </div>
                )
            })}
        </div>
        
    )
}

export default FAQs;