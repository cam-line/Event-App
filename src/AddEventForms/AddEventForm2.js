import React, { Component } from "react";
import NavButton from "../SharedComponents/NavButton";
import { ProgressBar, Row, Col } from "react-bootstrap";

export class AddEventForm2 extends Component {
  render() {
    return (
      <form
        onSubmit={this.props.nextStep}
        className="container p-3 my-3 border formBackground"
      >
        <div>
          {/*Header with title and progress bar*/}
          <Row className="event-header">
            <Col md={4}>
              <h3>Add Event</h3>
            </Col>
            <Col md={{ span: 4, offset: 3 }}>
              <h6>Step 2: Add the Details</h6>
              <ProgressBar now={66} />
            </Col>
          </Row>
          <div>
            {/*Input for event description*/}
            <div className="event-description-input">
              <h5>Description</h5>
              <textarea
                id="description"
                rows="4"
                cols="50"
                className="form-control"
                onChange={this.props.handleChange("description")}
                defaultValue={this.props.values.description}
              />
            </div>
            {/*Age input using radio buttons*/}
            <div className="event-age-input">
              <h5>Age Restrictions</h5>
              <div className="age-radio-buttons">
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    id="all-ages"
                    name="age-restriction"
                    className="form-check-input"
                    onClick={this.props.handleChange("ageRestriction")}
                    defaultValue={this.props.values.ageRestriction}
                  />
                  <label htmlFor="all-ages" className="form-check-label">
                    All Ages
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    id="18-and-over"
                    name="age-restriction"
                    className="form-check-input"
                    onClick={this.props.handleChange("ageRestriction")}
                    defaultValue={this.props.values.ageRestriction}
                  />
                  <label htmlFor="18-and-over" className="form-check-label">
                    18 and Over
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    id="21-and-over"
                    name="age-restriction"
                    className="form-check-input"
                    onClick={this.props.handleChange("ageRestriction")}
                    defaultValue={this.props.values.ageRestriction}
                  />
                  <label htmlFor="21-and-over" className="form-check-label">
                    21 and Over
                  </label>
                </div>
              </div>
            </div>
            {/*min/max price input with a min price of 0*/}
            <div className="event-price-input">
              <h5>Price Range</h5>
              <div className="row">
                <div className="col">
                  <input
                    type="number"
                    id="min-cost"
                    name="min-cost"
                    className="form-control"
                    placeholder="min $"
                    onChange={this.props.handleChange("minCost")}
                    min="0"
                  />
                </div>
                <div className="col">
                  <input
                    type="number"
                    id="max-cost"
                    name="max-cost"
                    className="form-control"
                    placeholder="max $"
                    onChange={this.props.handleChange("maxCost")} //defaultValue={this.props.values.maxCost}
                    min="0"
                  />
                </div>
              </div>
            </div>
            {/*Link to buy tickets*/}
            <div className="event-link-input">
              <h5>Ticket Link</h5>
              <input
                type="url"
                className="form-control"
                onChange={this.props.handleChange("link")}
                defaultValue={this.props.values.link}
              />
            </div>
          </div>
          {/*Navigation buttons*/}
          <div className="navButtons">
            {this.props.showButtons === true ? (
              <div className="btn-group navButtons">
                <button
                  onClick={this.props.prevStep}
                  className="btn BrewLogixBlue"
                >
                  Back
                </button>
                <button type="submit" className="btn brewGreen">
                  Next
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </form>
    );
  }
}

export default AddEventForm2;
