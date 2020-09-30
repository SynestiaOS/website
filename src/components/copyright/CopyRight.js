import React from 'react';
import './CopyRight.css';
import Container from "react-bootstrap/Container";

function CopyRight() {
    return (
        <Container className="CopyRight">
            <span>SynestiaOS  · All Rights Reserved ©2020</span>
            <span style={{float:"right"}}>current version: Lyra</span>
        </Container>
    );
}

export default CopyRight;
