import React from "react";
import PropTypes from "prop-types";

function TrafficLight() {
    return (
        <div className="container-fluid traffic-light">
            <div className="row d-flex justify-content-center">
                <div className="col-sm-12 traffic-top"></div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-sm-12 d-flex flex-column traffic-container">
                    <div className="red light" onClick={ () => this.setState({ clickedLight:'red'})}></div>
                    <div className="yellow light" onClick={ () => this.setState({ clickedLight:'yellow'})}></div>
                    <div className="green light" onClick={ () => this.setState({ clickedLight:'green'})}></div>
                </div>
            </div>
        </div>
    );
}

TrafficLight.propTypes = {
    traffic: PropTypes.string,
};

export default TrafficLight;