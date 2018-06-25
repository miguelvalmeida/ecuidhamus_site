import React from 'react';
import { FormattedMessage } from 'react-intl'

const personalSelect = (props) => {
  return (
    <div className="form-group">   
      <select className="form-control mt-2" id="exampleFormControlSelect1" onChange={props.change} value={props.default}>
        <option value="0" disabled><FormattedMessage id="choose-department" /></option>
        {props.options}
      </select>
    </div>
  )
}

export default personalSelect;