import {Toast, ToastHeader, ToastBody, Spinner} from 'reactstrap';
import * as React from 'react';

export default class GenericToast extends React.Component {

    render() {
        return (
            <Toast>
                <ToastHeader icon={<Spinner size="sm" type="grow" color="danger"/>}>Info</ToastHeader>
                <ToastBody>Info Here!</ToastBody>
            </Toast>
        )
    }
}
