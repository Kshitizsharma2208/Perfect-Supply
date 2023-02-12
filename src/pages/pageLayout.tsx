import React from 'react'

const defaultTitle = 'Man Power Supply for';

const PageLayout = (props: any) => {
    const {title=defaultTitle, content, heading} = props;

    return (
        <div className="oilAndGasContent container">
            <div className="content">
                <p className="contentHeader">
                    {title}
                </p>
            </div>
            <p className="contentHeading">{content}</p>
            <p className="contentInnner">{heading}</p>
        </div>
    )
}

export default PageLayout