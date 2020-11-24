import React from "react";
import { Container } from "react-bootstrap";

export default function Header() {
    return (
        <Container>
            <header>
                <h1 className="text-2xl font-bold py-3">
                    Github<span className="font-normal ml-1">Jobs</span>
                </h1>
            </header>
        </Container>
    );
}
