import React from "react";

// function Cards(props){
    // console.log(props);
   export const Cards = (props) =>{
        return(
            <>
                <div className="Cards">
                    <div className="card">
                      <img src={props.imgsrc} alt="mypic" className="card-img" />
                      <div className="card-info">
                        <span className="card-cateory">{props.title}</span>
                        <h3 className="card-title">{props.sname}</h3>
                        <a href={props.link} target="_blank">
                            <button> watch now </button>
                        </a>
                      </div>
                    </div>
                </div>
                
            </>
        );
    }
   
// }

// export default Cards;
