import React from 'react';
import { FormattedMessage } from 'react-intl';

const select = (props) => {
  return (
    <div className="form-row">
      <div className="form-group col-sm-2">
        <label htmlFor="date1"><FormattedMessage id="since" /></label>
        <select className="form-control form-control-sm" id="date1" onChange={props.changeDate1}>
          {props.options1}
        </select>
      </div>
      <div className="form-group col-sm-2">
        <label htmlFor="date2"><FormattedMessage id="until" /></label>
        <select className="form-control form-control-sm" id="date2" onChange={props.changeDate2} value={props.selected}>
          {props.options2}
        </select>
      </div>
    </div>
  )
}

export default select;