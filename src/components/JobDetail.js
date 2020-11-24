import { Link } from "@material-ui/core";
import { KeyboardBackspace, Public, Schedule } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { getJob } from "../api";
import { setIsHome } from "../store/isHomeSlice";

export function JobDetail({ id, setIsHome }) {
    const [job, setJob] = useState({});

    useEffect(() => {
        getJob(id).then(setJob);
    }, []);

    const count = (day) => {
        let day1 = new Date();
        let day2 = new Date(day);
        return `${Math.ceil(
            (day1.getTime() - day2.getTime()) / (1000 * 60 * 60 * 24)
        )} days ago`;
    };
    return (
        <>
            <Container className="mt-4">
                <Row>
                    <Col md={3}>
                        <button
                            className="text-blue-500"
                            onClick={() => {
                                setIsHome(true);
                            }}
                        >
                            <KeyboardBackspace />
                            Back to search
                        </button>
                        <h6 className="font-bold text-gray-600 mt-2">
                            HOW TO APPLY
                        </h6>
                        <p
                            className="break-words mt-2 "
                            dangerouslySetInnerHTML={{
                                __html: job.how_to_apply,
                            }}
                        ></p>
                    </Col>
                    <Col md={9}>
                        <h2 className="text-xl font-bold text-blue-1">
                            {job.title}
                            <span className="text-base font-medium border border-secondary rounded-lg w-auto ml-2 px-1">
                                {job.type}
                            </span>
                        </h2>
                        <div className="job-time text-gray-600 mt-2">
                            <Schedule />
                            <span>{count(job.created_at)}</span>
                        </div>
                        <div className="d-flex my-4">
                            <img
                                className="rounded-lg object-contain mr-2"
                                src={job.company_logo}
                                alt=""
                                style={{ width: 70, height: 70 }}
                            />
                            <div className="d-flex flex-col justify-between">
                                <h3 className="text-lg font-bold text-blue-1">
                                    {job.company}
                                </h3>
                                <div className="job-position text-gray-600">
                                    <Public />
                                    <span>{job.location}</span>
                                </div>
                            </div>
                        </div>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: job.description,
                            }}
                        ></p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default connect(null, { setIsHome })(JobDetail);
