import React, { Component } from 'react';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

import 'bootstrap/dist/css/bootstrap.min.css';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{  }}>
        <div className="container" style={{ padding: '50px' }}>
          <h3 style={{ textAlign: 'center' }}>ADD PROJECT</h3>
          <div className="row">
            <div className="col-2">
              <label>ADD GROUP 3</label>
              <input type="text" name="group3" id="group3" size="15" />
            </div>
            <div className="col-1">
              <button style={{ marginTop: '23px' }}>+</button>
            </div>

            <div className="col-2">
              <label>ADD GROUP 2</label>
              <input type="text" size="15" />
            </div>
            <div className="col-1">
              <button style={{ marginTop: '23px' }}>+</button>
            </div>

            <div className="col-2">
              <label>ADD GROUP 1</label>
              <input type="text" size="15" />
            </div>
            <div className="col-1">
              <button style={{ marginTop: '23px' }}>+</button>
            </div>

            <div className="col-2">
              <label>ADD ITEM</label>
              <input type="text" size="15" />
            </div>
            <div className="col-1">
              <button style={{ marginTop: '23px' }}>+</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Add;
