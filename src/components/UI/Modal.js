import React from 'react';
import { FormattedMessage } from 'react-intl';

import Aux from '../../hoc/auxi';

const modal = (props) => {
    return (
        <Aux>
            <button type="button" className={props.class} data-toggle="modal" data-target="#exampleModalCenter">
                {props.btnText}
            </button>
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">{props.title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {props.modalText}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn" data-dismiss="modal"><FormattedMessage id="cancel" /></button>
                            <button type="button" className={props.class} onClick={props.confirm} data-dismiss="modal">{props.action}</button>
                        </div>
                    </div>
                </div>
            </div>
        </Aux>
    )
}

export default modal;