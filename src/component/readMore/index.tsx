import React from 'react';
import { Link } from "react-router-dom";

import './readMore.scss';

const ReadMoreBtn = () => {
    return (
        <Link to="/about">
            <button type="button" className="btn btn-warning readMoreBtn">Read More</button>
        </Link>
    )
}

export default ReadMoreBtn;