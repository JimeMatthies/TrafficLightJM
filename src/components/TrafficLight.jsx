import React from "react";
import PropTypes from "prop-types";

class TrafficLight extends React.Component {

    constructor() {
        super ();
        this.state = {
            clickedLight: null
        };
    }

    render() {
        let redExtraStuff = "";
        if (this.state.clickedLight == "red") redExtraStuff = "selected";
        let yellowExtraStuff = "";
        if (this.state.clickedLight == "yellow") yellowExtraStuff = "selected";
        let greenExtraStuff = "";
        if (this.state.clickedLight == "green") greenExtraStuff = "selected";

        return (
            <div className="container-fluid traffic-light">
                <div className="row d-flex justify-content-center">
                    <div className="col-sm-12 traffic-top"></div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-sm-12 d-flex flex-column traffic-container">
                        <div className={"red light "+redExtraStuff} onClick={() => this.setState({ clickedLight: 'red' })}></div>
                        <div className={"yellow light "+yellowExtraStuff} onClick={() => this.setState({ clickedLight: 'yellow' })}></div>
                        <div className={"green light "+greenExtraStuff} onClick={() => this.setState({ clickedLight: 'green' })}></div>
                    </div>
                </div>
            </div>
        );
    };
}

TrafficLight.propTypes = {
    traffic: PropTypes.string,
};

export default TrafficLight