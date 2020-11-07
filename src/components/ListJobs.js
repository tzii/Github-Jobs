import React, { useState } from "react";
import { connect } from "react-redux";
import Job from "./Job";
import Pages from "./Pages";

export const ListJobs = ({ jobs }) => {
    return (
        <>
            {jobs.map((job, i) => (
                <Job key={i} job={job} />
            ))}
            <Pages total={jobs.length} />
        </>
    );
};

const mapStateToProps = (state) => ({ jobs: state.jobs });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ListJobs);
