import React from 'react';
import { AiOutlineCaretRight } from "react-icons/ai";

export function Link_button(props) {
    const {button_title, link} = props;

    return (
        <div>
            <a className="link-btn" href={link}> {button_title} </a>
        </div>
    );
}

export function Read_more(props) {
    const {link} = props;
    
    return (
        <div className="readmore-icon">
            <AiOutlineCaretRight/>
            <a href={link}> Read More </a>
        </div>
    );
}

