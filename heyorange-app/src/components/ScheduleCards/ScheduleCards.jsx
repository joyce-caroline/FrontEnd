import React from "react";
import {CardBody, CardText } from "reactstrap";
import {Link} from "react-router-dom"
import "./ScheduleCards.css"

const ScheduleCards = () => {
    return (
        <div>

            {/* <Card className="container" color="light"> */}
<CardBody className="body-container">
                <Link className="LinkRota" to="/mentoria">
                
                    <CardText className="row">
                        <div className="col-6">
                            <p><strong >15/Abril<br />2022</strong></p>
                        </div>
                        <div className="col-6">
                            <strong className="row">Anna</strong>
                            <span className="hora">🕒 14:00 - 14:30</span>
                        </div>
                    </CardText>
              </Link>   </CardBody>
               
            {/* </Card> */}


            {/* <Card className="container" color="light"> */}
           
                <CardBody className="body-container">
                    <Link className="LinkRota" to="/mentoria">
                    <CardText className="row">
                        <div className="col-6">
                            <p><strong >16/Abril<br />2022</strong></p>
                        </div>
                        <div className="col-6">
                            <strong className="row">Anna</strong>
                            <span className="hora">🕒 15:00 - 15:30</span>
                        </div>
                    </CardText>
                </Link>    
                </CardBody>

                <CardBody className="body-container">
                    <Link className="LinkRota" to="/mentoria">
                    <CardText className="row">
                        <div className="col-6">
                            <p><strong >17/Abril<br />2022</strong></p>
                        </div>
                        <div className="col-6">
                            <strong className="row">Anna</strong>
                            <span className="hora">🕒 16:00 - 16:30</span>
                        </div>
                    </CardText>
                </Link>    
                </CardBody>
            
            {/* </Card> */}

        </div>

    )
}

export default ScheduleCards