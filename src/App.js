import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: [],
    };
  }

  addFormFields() {
    this.setState({
      formValues: [...this.state.formValues, {}],
    });
  }

  removeFormFields(i) {
    let formValues = this.state.formValues;
    formValues.splice(i, 1);
    this.setState({ formValues });
  }

  group3 = (e) => {
    alert('hai');
  };

  render() {
    return (
      <Formik
        initialValues={{
          // // Add
          // group3: "",
          // group2: "",
          // group1: "",
          // item: "",
          // alert
          tempmin: '',
          tempmax: '',
          tempinterval: '',
          tempallowed: '',
          hummin: '',
          hummax: '',
          huminterval: '',
          humallowed: '',
          sealing: '',
        }}
        validationSchema={Yup.object().shape({
          // add
          // group3: Yup.string()
          //     .required('Group3 is required'),
          // group2: Yup.string()
          //     .required('Group2 is required'),
          // group1: Yup.string()
          //     .required('Group1 is required'),
          // item: Yup.string()
          //     .required('Item is required'),

          // alert
          tempmin: Yup.number().required('Minimum Temperature is required'),
          // .min(3, "Minimum temperature must be less than Maximum temperature"),
          tempmax: Yup.number().required('Maximum Temperature is required'),
          // .max(3, "Maximum temperature must be more than Minimum temperature"),
          tempinterval: Yup.number().required('Alert interval is required'),
          tempallowed: Yup.number().required(
            'Temperature allowed occurence is required'
          ),
          hummin: Yup.number().required('Minimum Humidity is required'),
          hummax: Yup.number().required('Maximum Humidity is required'),
          huminterval: Yup.number().required('Alert interval is required'),
          humallowed: Yup.number().required(
            'Humidity allowed occurence is required'
          ),
          sealing: Yup.number().required('Ambiance  is required'),
        })}
        onSubmit={(fields) => {}}
      >
        {({ handleChange, handleBlur, values }) => (
          <Form style={{}}>
            {/* add */}
            {/* <div className="container" style={{ padding: "50px" }}>
                            <h3 style={{ textAlign: "center" }} >ADD PROJECT</h3>
                            <div className="row">
                                <div className="col-2">
                                    <label>ADD GROUP 3</label>
                                    <Field type="text" name="group3" size="15" id="group3" autoComplete="off" placeholder="TypeID"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.group3} />
                                    <ErrorMessage name="group3" component="div" className="text-danger" />
                                </div>
                                <div className="col-1">
                                    <button style={{ marginTop: "23px" }} onClick={(e)=>this.group3(e)} >+</button>
                                </div>

                                <div className="col-2">
                                    <label>ADD GROUP 2</label>
                                    <Field type="text" name="group2" size="15" id="group2" autoComplete="off" placeholder="TypeID"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.group2} />
                                    <ErrorMessage name="group2" component="div" className="text-danger" />
                                </div>
                                <div className="col-1">
                                    <button style={{ marginTop: "23px" }}>+</button>
                                </div>

                                <div className="col-2">
                                    <label>ADD GROUP 1</label>
                                    <Field type="text" name="group1" size="15" id="group1" autoComplete="off" placeholder="TypeID"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.group1} />
                                    <ErrorMessage name="group1" component="div" className="text-danger" />
                                </div>
                                <div className="col-1">
                                    <button style={{ marginTop: "23px" }}>+</button>
                                </div>

                                <div className="col-2">
                                    <label>ADD ITEM</label>
                                    <Field type="text" name="item" size="15" id="item" autoComplete="off" placeholder="TypeID"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.item} />
                                    <ErrorMessage name="item" component="div" className="text-danger" />
                                </div>
                                <div className="col-1">
                                    <button style={{ marginTop: "23px" }}>+</button>
                                </div>
                            </div>


                        </div> */}

            {/* Alert */}
            <div
              className="container"
              style={{ backgroundColor: 'white', padding: '50px' }}
            >
              <h3>Alert</h3>
              <div
                className="row"
                style={{
                  border: 'solid 1px',
                  height: '150px',
                  width: 'auto',
                  padding: '25px',
                }}
              >
                <div className="col-3">
                  <p>Temperature(°C)</p>
                  <Field
                    type="text"
                    name="tempmin"
                    size="15"
                    id="tempmin"
                    autoComplete="off"
                    placeholder="Min Range"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.tempmin}
                  />
                  <ErrorMessage
                    name="tempmin"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <div className="col-3" style={{ marginTop: '39px' }}>
                  <Field
                    type="text"
                    size="15"
                    name="tempmax"
                    id="tempmax"
                    autoComplete="off"
                    placeholder="Max Range"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.tempmax}
                  />
                  <ErrorMessage
                    name="tempmax"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <div className="col-3">
                  <p>Interval</p>
                  <Field
                    type="text"
                    name="tempinterval"
                    size="15"
                    id="tempinterval"
                    autoComplete="off"
                    placeholder="Minutes"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.tempinterval}
                  />
                  <ErrorMessage
                    name="tempinterval"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <div className="col-3">
                  <p>Allowed Occurance</p>
                  <Field
                    type="text"
                    name="tempallowed"
                    size="15"
                    id="tempallowed"
                    autoComplete="off"
                    placeholder="Times"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.tempallowed}
                  />
                  <ErrorMessage
                    name="tempallowed"
                    component="div"
                    className="text-danger"
                  />
                </div>
              </div>

              <div
                className="row"
                style={{
                  border: 'solid 1px',
                  height: '150px',
                  width: 'auto',
                  marginTop: '10px',
                  padding: '25px',
                }}
              >
                <div className="col-3">
                  <p>Humidity(%)</p>
                  <Field
                    type="text"
                    name="hummin"
                    size="15"
                    id="hummin"
                    autoComplete="off"
                    placeholder="Min Range"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.hummin}
                  />
                  <ErrorMessage
                    name="hummin"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <div className="col-3" style={{ marginTop: '39px' }}>
                  <Field
                    type="text"
                    size="15"
                    name="hummax"
                    id="hummax"
                    autoComplete="off"
                    placeholder="Max Range"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.hummax}
                  />
                  <ErrorMessage
                    name="hummax"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <div className="col-3">
                  <p>Interval</p>
                  <Field
                    type="text"
                    name="huminterval"
                    size="15"
                    id="huminterval"
                    autoComplete="off"
                    placeholder="Minutes"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.huminterval}
                  />
                  <ErrorMessage
                    name="huminterval"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <div className="col-3">
                  <p>Allowed Occurance</p>
                  <Field
                    type="text"
                    name="humallowed"
                    size="15"
                    id="humallowed"
                    autoComplete="off"
                    placeholder="Times"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.humallowed}
                  />
                  <ErrorMessage
                    name="humallowed"
                    component="div"
                    className="text-danger"
                  />
                </div>
              </div>

              <div
                className="row"
                style={{
                  border: 'solid 1px',
                  height: '150px',
                  width: 'auto',
                  marginTop: '10px',
                  padding: '25px',
                }}
              >
                <div className="col-3">
                  <p>Sealing(ambiance%)</p>
                  <Field
                    type="text"
                    name="sealing"
                    size="15"
                    id="sealing"
                    autoComplete="off"
                    placeholder="Min Range"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.sealing}
                  />
                  <ErrorMessage
                    name="sealing"
                    component="div"
                    className="text-danger"
                  />
                </div>
              </div>
            </div>

            {/* Data */}
            {/* <div className="container" style={{ padding: '20px' }}>
              <div style={{ backgroundColor: 'black', height: '50px' }}>
                <div
                  class="row align-items-start"
                  style={{ textAlign: 'center' }}
                >
                  <div
                    class="col"
                    style={{ color: 'white', textAlign: 'center' }}
                  >
                    ADD GROUP3
                  </div>
                  <div
                    class="col"
                    style={{ color: 'white', textAlign: 'center' }}
                  >
                    ADD GROUP2
                  </div>
                  <div
                    class="col"
                    style={{ color: 'white', textAlign: 'center' }}
                  >
                    ADD GROUP1
                  </div>
                  <div
                    class="col"
                    style={{ color: 'white', textAlign: 'center' }}
                  >
                    ITEM
                  </div>
                  <div
                    class="col"
                    style={{ color: 'white', textAlign: 'center' }}
                  >
                    ACTION
                  </div>
                </div>
              </div>

              {this.state.formValues.map((element, index) => (
                <div className="form-inline" key={index}>
                  <select
                    style={{
                      width: '260px',
                      height: '30px',
                      marginLeft: '10px',
                    }}
                  >
                    <option value="" disabled selected>
                      ADD GROUP3
                    </option>
                    <option value={''}>1</option>
                    <option value={''}>2</option>
                    <option value={''}>3</option>
                  </select>

                  <select
                    value=""
                    style={{
                      width: '260px',
                      height: '30px',
                      marginLeft: '10px',
                    }}
                  >
                    <option value="" disabled selected>
                      ADD GROUP2
                    </option>
                    <option value={''}></option>
                    <option value={''}></option>
                    <option value={''}></option>
                  </select>

                  <select
                    value=""
                    style={{
                      width: '260px',
                      height: '30px',
                      marginLeft: '10px',
                    }}
                  >
                    <option value="" disabled selected>
                      ADD GROUP1
                    </option>
                    <option value={''}></option>
                    <option value={''}></option>
                    <option value={''}></option>
                  </select>

                  <select
                    value=""
                    style={{
                      width: '260px',
                      height: '30px',
                      marginLeft: '10px',
                    }}
                  >
                    <option value="" disabled selected>
                      ITEM
                    </option>
                    <option value={''}></option>
                    <option value={''}></option>
                    <option value={''}></option>
                  </select>

                  {index ? (
                    <button
                      type="button"
                      style={{ marginLeft: '20px' }}
                      className="button remove"
                      onClick={() => this.removeFormFields(index)}
                    >
                      Delete
                    </button>
                  ) : null}
                  <button
                    type="button"
                    style={{ marginLeft: '20px' }}
                    onClick={() => this.addFormFields()}
                  >
                    ADD
                  </button>
                </div>
              ))}
              <br />
              <div className="button-section">
                <button type="button" onClick={() => this.addFormFields()}>
                  ADD
                </button>
              </div>
            </div>*/}

            <div className="row mb-3 mt-4">
              <div className="col-5"></div>
              <div className="col-1">
                <input
                  type="submit"
                  className="button btn btn-primary mr-1"
                  value="Submit"
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    );
  }
}

export default App;
