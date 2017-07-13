import React from 'react';
import Example from './Example';
import Props from './Props';

const ComponentPage = ({ component }) => {
    const { name, description, props, examples } = component;

    return (
        <div className="componentPage">
            <h2>{name}</h2>
            <p>{description}</p>

            <h3>Example{examples.length > 1 && "s"}</h3>
            {
                examples.length > 0 ?
                    examples.map( example => <Example key={example.code} example={example} componentName={name} /> ) : "No examples exist."
            }

            <h3>Props</h3>
            {
                props ?
                    <Props props={props} /> :
                    "This component accepts no props."
            }
        </div>
    );
};

export default ComponentPage;
