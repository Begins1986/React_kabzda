import React from 'react';

export type AccordionPropsType = {
    title: string
}

export const Accordion = (props: AccordionPropsType) => {
    return (
        <>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </>
    );
};

const AccordionTitle = (props: AccordionPropsType) => {
    return <h2>{props.title}</h2>
}

const AccordionBody = () => {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

