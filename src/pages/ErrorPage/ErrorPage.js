import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, BigText, Button } from "./ErrorPageStyles";

const ErrorPage = () => {
    const navigate = useNavigate();
    const handleErrorButton = () => {
        navigate('/')
    }
    return (
        <Container>
            <BigText>
                THERES NOTHING HERE...
            </BigText>
            <Button onClick={handleErrorButton}>
                Back To Home
            </Button>
        </Container>

    )
}

export default ErrorPage;