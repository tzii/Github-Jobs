import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FormSearchCity from "./FormSearchCity";
import FormSearchCompanies from "./FormSearchCompanies";
import ListJobs from "./ListJobs";

export default function Home() {
    return (
        <>
            <FormSearchCompanies />
            <Container className="mt-4">
                <Row>
                    <Col md={4}>
                        <FormSearchCity />
                    </Col>
                    <Col md={8}>
                        <ListJobs />
                    </Col>
                </Row>
            </Container>
        </>
    );
}
