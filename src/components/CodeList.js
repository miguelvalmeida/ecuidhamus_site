import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const codeList = (props) => {
    let completedBtn = <span className="badge badge-danger badge-pill float-right"><FormattedMessage id="not-completed" /></span>
    if (props.completed === 1) {
        completedBtn = <span className="badge badge-success badge-pill float-right"><FormattedMessage id="completed" /></span>
    }
    return (
        <div className="container mb-2" style={{ width: "100%", maxWidth: "500px", margin: "0 auto" }}>
            <div className="card">
                <Link to={'/codes/' + props.codeUrl} className="no-decoration">
                    <div className="card-body list-group-item-action text-primary">
                        {props.code}
                        <span className="badge badge-dark badge-pill float-right">{props.date}</span>
                        {completedBtn}
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default codeList;