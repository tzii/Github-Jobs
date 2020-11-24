import React, { useRef } from "react";
import { connect } from "react-redux";
import { Form } from "react-bootstrap";
import { setIsFull } from "../store/isFullSlice";
import { setLocation } from "../store/locationSlice";
import { getJobs } from "../store/jobsSlice";

export const FormSearchCity = ({ setIsFull, setLocation, getJobs }) => {
    const checkBoxIsFull = useRef();
    const form = useRef();
    const textCity = useRef();
    const checkBoxLodon = useRef();
    const checkBoxAmsterdam = useRef();
    const checkBoxNewYork = useRef();
    const checkBoxBerlin = useRef();
    const arr = [
        checkBoxLodon,
        checkBoxAmsterdam,
        checkBoxNewYork,
        checkBoxBerlin,
    ];

    const changeIsFullHandler = (e) => {
        setIsFull(e.target.checked);
        getJobs();
    };

    const changeHandler = (e) => {
        arr.forEach((x) => {
            if (x.current.id !== e.target.id) x.current.checked = false;
        });
        form.current.citySearch.value = e.target.id;
        setLocation(e.target.id);
        getJobs();
    };

    const submitHandler = (e) => {
        e.preventDefault();
        setLocation(e.target.citySearch.value);
        getJobs();
    };

    const searchChangeHandler = (e) => {
        arr.forEach((x) => (x.current.checked = false));

        setLocation(e.target.value);
    };

    return (
        <>
            <Form.Check
                className="cursor-pointer mb-2"
                label="Full time"
                id="isFullTime"
                onChange={changeIsFullHandler}
                ref={checkBoxIsFull}
            />
            <h3 className="mb-2 text-xl">LOCATION</h3>
            <Form className="mb-2" onSubmit={submitHandler} ref={form}>
                <Form.Control
                    placeholder="City, state, zip code or country"
                    id="citySearch"
                    name="citySearch"
                    ref={textCity}
                    onChange={searchChangeHandler}
                />
            </Form>
            <Form.Check
                className="mb-2"
                label="Lodon"
                id="Lodon"
                ref={checkBoxLodon}
                onChange={changeHandler}
            />
            <Form.Check
                className="mb-2"
                label="Amsterdam"
                id="Amsterdam"
                ref={checkBoxAmsterdam}
                onChange={changeHandler}
            />
            <Form.Check
                className="mb-2"
                label="New York"
                id="NewYork"
                ref={checkBoxNewYork}
                onChange={changeHandler}
            />
            <Form.Check
                className="mb-2"
                label="Berlin"
                id="Berlin"
                ref={checkBoxBerlin}
                onChange={changeHandler}
            />
        </>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { setIsFull, setLocation, getJobs };

export default connect(mapStateToProps, mapDispatchToProps)(FormSearchCity);
