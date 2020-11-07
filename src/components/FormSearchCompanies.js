import React from "react";
import bg from "../images/backgroundImg.png";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";

export default function FormSearchCompanies() {
    return (
        <Container>
            <Row className="py-5 justify-content-center position-relative">
                <Image
                    src={bg}
                    className="position-absolute h-100 rounded-lg"
                    style={{
                        zIndex: -1,
                        top: 0,
                        left: 15,
                        objectFit: "cover",
                        width: "calc(100% - 30px)",
                    }}
                />
                <Col md={8} className="position-relative">
                    <Form id="form-search-companies">
                        <Form.Control
                            type="text"
                            size="lg"
                            placeholder="Title, companies, expertise or benefits"
                        />
                        <Button
                            className="px-4 position-absolute"
                            style={{ top: 5, right: 20 }}
                        >
                            Search
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
