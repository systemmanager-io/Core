import {Toast, ToastHeader, ToastBody, Spinner} from 'reactstrap';
import {Component} from 'React'
import React from "react";

export default class GenericToast extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Toast>
                <ToastHeader icon={<Spinner size="sm" type="grow" color="danger"/>}>Info</ToastHeader>
                <ToastBody>Info Here!</ToastBody>
            </Toast>
        )
    }
}