import { NavigateBefore, NavigateNext } from "@material-ui/icons";
import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { setPage } from "../store/pageSlice";
import { getJobs } from "../store/jobsSlice";

export const Pages = ({ page, setPage, getJobs, total }) => {
    const beforeHandler = () => {
        if (page === 1) return;
        setPage(page - 1);
        getJobs();
    };
    const nextHandler = () => {
        if (total < 50) return;
        setPage(page + 1);
        getJobs();
    };

    return (
        <div className="pages">
            <Button variant="outline-primary" size="sm" onClick={beforeHandler}>
                <NavigateBefore />
            </Button>
            <Button variant="outline-primary" size="sm" onClick={nextHandler}>
                <NavigateNext />
            </Button>
        </div>
    );
};

const mapStateToProps = (state) => ({ page: state.page });

const mapDispatchToProps = { setPage, getJobs };

export default connect(mapStateToProps, mapDispatchToProps)(Pages);
