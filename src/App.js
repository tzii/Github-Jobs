import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import JobDetail from "./components/JobDetail";
import { getJobs } from "./store/jobsSlice";

export const App = ({ getJobs, isHome, jobId }) => {
    useEffect(() => {
        getJobs();
    });

    return (
        <div className="app">
            <Header />
            {isHome ? <Home /> : <JobDetail id={jobId} />}
            <Footer />
        </div>
    );
};

const mapStateToProps = (state) => ({
    isHome: state.idHome,
    jobId: state.jobId,
});

const mapDispatchToProps = { getJobs };

export default connect(mapStateToProps, mapDispatchToProps)(App);
