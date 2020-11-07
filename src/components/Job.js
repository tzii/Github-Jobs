import React from "react";
import { Public, Schedule } from "@material-ui/icons";
import { Button, Col, Image, Row } from "react-bootstrap";
import { setIsHome } from "../store/isHomeSlice";
import { setJobId } from "../store/jobIdSlice";
import { connect } from "react-redux";

export const Job = ({ job, setIsHome, setJobId }) => {
    const clickHandler = () => {
        setJobId(job.id);
        setIsHome(false);
    };
    return (
        <div
            className="mb-4 p-2 rounded-lg shadow"
            style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "flex-start",
                cursor: "pointer",
            }}
            onClick={clickHandler}
        >
            <Image
                className="rounded-lg"
                src={job.company_logo || "http://placehold.it/90x90?text=404"}
                style={{
                    marginRight: 15,
                    width: 90,
                    height: 90,
                    objectFit: "contain",
                }}
            />
            <div className="d-md-flex" style={{ flex: 1 }}>
                <div style={{ flex: 1 }}>
                    <small>{job.company}</small>
                    <p>{job.title}</p>
                    <span className="border border-secondary rounded-lg w-auto px-1">
                        {job.type}
                    </span>
                </div>
                <div
                    className="justify-content-between"
                    style={{
                        display: "flex",
                        alignSelf: "flex-end",
                    }}
                >
                    <div className="job-position">
                        <Public />
                        <span>{job.location}</span>
                    </div>
                    <div className="job-time">
                        <Schedule />
                        <span>5 days ago</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { setIsHome, setJobId };

export default connect(mapStateToProps, mapDispatchToProps)(Job);
