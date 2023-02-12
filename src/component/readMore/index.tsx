import React from 'react';

import './readMore.scss';

const ReadMoreBtn = () => {
    return (
        <a href="/about">
            <button type="button" className="btn btn-warning readMoreBtn">Read More</button>
        </a>
    )
}

export default ReadMoreBtn;