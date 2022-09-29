import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './QA.css'

const QA = () => {

    return (
        <div className='accordion'>
            <h2 className='accodion-header'>Q&A Section</h2>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>How Does React Works?</Accordion.Header>
                    <Accordion.Body>
                        React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Difference between props and state?</Accordion.Header>
                    <Accordion.Body>
                        Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>useEffect works detrails except loading data?</Accordion.Header>
                    <Accordion.Body>
                        Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect. We don’t need a special API to read it — it’s already in the function scope. Hooks embrace JavaScript closures and avoid introducing React-specific APIs where JavaScript already provides a solution.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default QA;