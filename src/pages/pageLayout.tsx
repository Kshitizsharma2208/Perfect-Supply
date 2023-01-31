import React from 'react'

const PageLayout = (props: any) => {
    return (
        <>
            <div className="oilAndGasContent container">
                <div className="content">
                    <p className="contentHeader">
                        {props.title}
                    </p>
                </div>
                <p className="contentHeading">{props.content}</p>
                <p className="contentInnner">{props.heading}</p>
            </div>
        </>
    )
}

export default PageLayout