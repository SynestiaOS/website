import React, {Component} from 'react';
import './CopyRight.css';
import Container from "react-bootstrap/Container";
import {withTranslation} from "react-i18next";

class CopyRight extends Component{
    render() {
        return (
            <Container className="CopyRight">
                <span>{this.props.t("CopyRight")}</span>
                <span style={{float: "right"}}>{this.props.t("CurrentVersion")}</span>
            </Container>
        );
    }
}

export default withTranslation()(CopyRight);
