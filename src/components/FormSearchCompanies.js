import React from "react";
import bg from "../images/backgroundImg.png";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { setDescription } from "../store/descriptionSlice";
import { getJobs } from "../store/jobsSlice";
import { connect } from "react-redux";

export function FormSearchCompanies({ setDescription, getJobs }) {
    const submitHandler = (e) => {
        e.preventDefault();
        getJobs();
    };

    const searchChangeHandler = (e) => {
        setDescription(e.target.value);
    };
    return (
        <Container>
            <Row className="py-5 justify-content-center position-relative">
                <Image
                    src={bg}
                    className="position-absolute h-100 rounded-lg"
                    style={{
                        zIndex: 0,
                        top: 0,
                        left: 15,
                        objectFit: "cover",
                        width: "calc(100% - 30px)",
                    }}
                />
                <Col md={8} className="position-relative" style={{ zIndex: 1 }}>
                    <Form id="form-search-companies" onSubmit={submitHandler}>
                        <Form.Control
                            type="text"
                            size="lg"
                            placeholder="Title, companies, expertise or benefits"
                            onChange={searchChangeHandler}
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { setDescription, getJobs };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormSearchCompanies);
