import React from 'react';
import axios from "../../axios";
import CaseList from "../components/CaseList";
import Axios from "axios";
import {Button} from "react-bootstrap";
import "./UserCases.css";
import DraftCases from "./DraftCases";



export default class UserCases extends React.Component {
    draftBtnProps;
    publisedBtnProps;
    constructor(props){
        super(props);
        this.state={ data: ''};


    }



    render(){

        return (<div>

        <div className="toggleBtns">
            <div className="btnsDiv">
                <Button className={"usercasesBtn"} id="draftBtn" style={this.draftBtnProps}>DRAFT CASE STUDIES</Button>
            </div>
            <div className="btnsDiv">
                <Button className={"usercasesBtn"} id="publishedBtn" style={this.publisedBtnProps}>PUBLISHED CASE STUDIES</Button>
            </div>
        </div>
            <div className="btnsDiv">
                <DraftCases/>
            </div>

        </div> );

    };


}
