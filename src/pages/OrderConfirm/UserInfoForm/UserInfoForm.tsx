import React from 'react';
import { UserInfoFormSection } from '../styles';

const UserInfoForm = () => {
  return (
    <UserInfoFormSection>
      <form
        action="https://nicepage.com/editor/Forms/Process"
        method="POST"
        className="form-spacing-10 form-vertical"
        name="form"
      >
        <div className="form-group form-name form-partition-factor-2 form-group-2">
          <label htmlFor="name-f2a8" className="label ">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your Name"
            id="name-f2a8"
            name="name"
            className="border-1 border-grey-30 input input-rectangle white"
          />
        </div>
        <div className="form-group form-partition-factor-2 form-group-1">
          <label htmlFor="address-f2a8" className="label">
            Your address
          </label>
          <input
            type="text"
            placeholder="Enter a address"
            id="address-f2a8"
            name="address"
            className="border-1 border-grey-30 input input-rectangle white"
          />
        </div>
        <div className="form-date form-group form-partition-factor-2 form-group-3">
          <label htmlFor="time-4441" className="label ">
            Delivery date and time
          </label>
          <input
            type="datetime-local"
            id="time-4441"
            name="time"
            className="border-1 border-grey-30 input input-rectangle white"
          />
        </div>
        <div className="form-group form-partition-factor-2 form-group-4">
          <label htmlFor="phone-447e" className="label ">
            Phone
          </label>
          <input
            id="phone-447e"
            type="tel"
            pattern="\+?\d{0,2}[\s\(\-]?([0-9]{3})[\s\)\-]?([\s\-]?)([0-9]{3})[\s\-]?([0-9]{2})[\s\-]?([0-9]{2})"
            placeholder="Enter your phone (e.g. +375331234567)"
            name="phone"
            className="border-1 border-grey-30 input input-rectangle"
          />
        </div>

        <div className="align-center form-group form-submit form-group-6">
          <input type="submit" value="save for next orders" className="btn " />
        </div>
      </form>
    </UserInfoFormSection>
  );
};

export default UserInfoForm;
