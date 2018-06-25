import React from 'react';
import { FormattedMessage } from 'react-intl'

const selectDepartment = (props) => {
  return (
    <div className="form-group">   
      <select className="form-control mt-2" id="exampleFormControlSelect1" onChange={props.change} defaultValue={props.default}>
        <option value="0"><FormattedMessage id="all-departments" /></option>
        {props.options}
      </select>
    </div>
  )
}

export default selectDepartment;