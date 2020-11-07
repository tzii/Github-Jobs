import React from "react";
import { connect } from "react-redux";
import { Form } from "react-bootstrap";
import { setIsFull } from "../store/isFullSlice";

export const FormSearchCity = ({ setIsFull }) => {
    const changeHandler = (e) => {
        setIsFull(e.target.checked);
    };

    return (
        <>
            <Form.Check
                label="Full time"
                id="isFullTime"
                onChange={changeHandler}
            />
            <h3>LOCATION</h3>
            <Form>
                <Form.Control
                    placeholder="City, state, zip code or country"
                    id="citySearch"
                />
            </Form>
            <Form.Check type="radio" label="Lodon" id="lodon" name="city" />
            <Form.Check type="radio" label="Amsterdam" id="ams" name="city" />
            <Form.Check type="radio" label="New York" id="ny" name="city" />
            <Form.Check type="radio" label="Berlin" id="berlin" name="city" />
        </>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { setIsFull };

export default connect(mapStateToProps, mapDispatchToProps)(FormSearchCity);
