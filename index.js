import React from "react";
import  ReactDOM  from "react-dom";
import "./index.css";
import {Cards} from "./Cards";
import File from "./File";


   ReactDOM.render( 
    <>
      <h1 className="heading-info">LIST OF TOP 5 NETFLIX SERIES</h1>
      <Cards
        sname ={File[0].sname}
        imgsrc = {File[0].imgsrc}
        title = {File[0].title}
        link = {File[0].link}
       />
      <Cards 
        sname = {File[1].sname}
        imgsrc = {File[1].imgsrc}
        title = {File[1].title}
        link = {File[1].link}
      />  
      <Cards 
        sname = {File[2].sname}
        imgsrc = {File[2].imgsrc}
        title = {File[2].title}
        link = {File[2].link}
      />
      <Cards 
        sname = {File[3].sname}
        imgsrc = {File[3].imgsrc}
        title = {File[3].title}
        link = {File[3].link}
      />
      <Cards 
        sname = {File[4].sname}
        imgsrc = {File[4].imgsrc}
        title = {File[4].title}
        link = {File[4].link}
      />
    </>
   
        , document.getElementById("root")
);
