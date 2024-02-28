import React from "react";
import "../../styles/findCarForm.css";
import "../../styles/findCarForm.css";
import { Form, FormGroup } from "reactstrap";

function FindCarForm() {
  return (
    <Form className="form">
      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text " placeholder="Form address" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="To address" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Journey date" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            type="time"
            className="Journey__time"
            placeholder="Journey time"
            required
          />
        </FormGroup>

        <FormGroup className="select__group">
          <select>
            <option value="ac">Car Lover</option>
            <option value="non-ac">Non</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="find__car_btn">Find Car</button>
        </FormGroup>
      </div>
    </Form>
  );
}

export default FindCarForm;
