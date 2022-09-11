import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: [{ quantity: '', price: '', total: '' }],
      total: null,
    };
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(i, e) {
    let formValues = this.state.formValues;
    formValues[i][e.target.name] = e.target.value;
    this.setState({ formValues });
  }

  addFormFields() {
    this.setState({
      formValues: [
        ...this.state.formValues,
        { quantity: '', price: '', total: '' },
      ],
    });
  }

  removeFormFields(i) {
    let formValues = this.state.formValues;
    formValues.splice(i, 1);
    this.setState({ formValues });
  }

  //   handleSubmit(event) {
  //     event.preventDefault();
  //     const sum = this.state.formValues.reduce((accumulator, object) => {
  //       return accumulator + object.total;
  //     }, 0);
  //     this.setState({ total: sum })
  //     this.settimer();
  //   }

  render() {
    return (
      <>
        <div
          className="container"
          style={{ padding: '50px', }}
        >
          <div style={{ backgroundColor: 'black' }}>
            <div class="row align-items-start">
              <div class="col" style={{ color: 'white', textAlign: 'center' }}>
                ADD GROUP3
              </div>
              <div class="col" style={{ color: 'white', textAlign: 'center' }}>
                ADD GROUP2
              </div>
              <div class="col" style={{ color: 'white', textAlign: 'center' }}>
                ADD GROUP1
              </div>
              <div class="col" style={{ color: 'white', textAlign: 'center' }}>
                ITEM
              </div>
              <div class="col" style={{ color: 'white', textAlign: 'center' }}>
                ACTION
              </div>
            </div>
          </div>

          <form onSubmit={this.handleSubmit}>
            {this.state.formValues.map((element, index) => (
              <div className="form-inline" key={index}>
                <select
                  value=""
                  style={{ width: '250px', height: '30px', marginLeft: '10px' }}
                >
                  <option value={''}></option>
                  <option value={''}></option>
                  <option value={''}></option>
                </select>

                <select
                  value=""
                  style={{ width: '250px', height: '30px', marginLeft: '10px' }}
                >
                  <option value={''}></option>
                  <option value={''}></option>
                  <option value={''}></option>
                </select>

                <select
                  value=""
                  style={{ width: '250px', height: '30px', marginLeft: '10px' }}
                >
                  <option value={''}></option>
                  <option value={''}></option>
                  <option value={''}></option>
                </select>

                <select
                  value=""
                  style={{ width: '250px', height: '30px', marginLeft: '10px' }}
                >
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
                    X
                  </button>
                ) : null}
                <button
                  type="button"
                  style={{ marginLeft: '20px' }}
                  onClick={() => this.addFormFields()}
                >
                  +
                </button>
              </div>
            ))}
            <br />
            <div className="button-section">
              <button type="button" onClick={() => this.addFormFields()}>
                +
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Data;
