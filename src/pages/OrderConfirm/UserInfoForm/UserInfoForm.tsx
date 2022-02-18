import React from 'react';
import { useForm } from 'react-hook-form';
import { UserInfoFormSection } from '../styles';
import { FieldErrorNotification } from '../../../shared/styled/headers/FieldErrorNotification';

interface CustomerOrderDataInterface {
  name: string;
  address: string;
  time: string;
  phone: string;
}

const UserInfoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomerOrderDataInterface>();

  const submitCustomerOrderData = (data: CustomerOrderDataInterface) => {
    console.log(data);
  };

  return (
    <UserInfoFormSection>
      <form className="user-form" name="form" onSubmit={handleSubmit(submitCustomerOrderData)}>
        <div className="form-group  form-partition-factor-2 ">
          <label htmlFor="name" className="label ">
            Name{' '}
            {errors?.phone?.type === 'required' && (
              <FieldErrorNotification>This field is required</FieldErrorNotification>
            )}
          </label>
          <input
            {...register('name', { required: true })}
            type="text"
            placeholder="Enter your Name"
            id="name"
            name="name"
            className="input"
          />
        </div>
        <div className="form-group form-partition-factor-2">
          <label htmlFor="address" className="label">
            Your address{' '}
            {errors?.address?.type === 'required' && (
              <FieldErrorNotification>This field is required</FieldErrorNotification>
            )}
          </label>
          <input
            {...register('address', { required: true })}
            type="text"
            placeholder="Enter a address"
            id="address"
            name="address"
            className="input"
          />
        </div>
        <div className="form-group form-partition-factor-2">
          <label htmlFor="time" className="label ">
            Delivery date and time{' '}
            {errors?.time?.type === 'required' && (
              <FieldErrorNotification>This field is required</FieldErrorNotification>
            )}
          </label>
          <input
            {...register('time', { required: true })}
            type="datetime-local"
            id="time"
            name="time"
            className=" input  white"
          />
        </div>
        <div className="form-group form-partition-factor-2">
          <label htmlFor="phone" className="label ">
            Phone{' '}
            {errors?.phone?.type === 'required' && (
              <FieldErrorNotification>This field is required</FieldErrorNotification>
            )}
            {errors?.phone?.type === 'pattern' && (
              <FieldErrorNotification>Wrong phone format</FieldErrorNotification>
            )}
          </label>
          <input
            {...register('phone', {
              required: true,
              pattern: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im,
            })}
            id="phone"
            type="tel"
            placeholder="Enter your phone (e.g. +375331234567)"
            name="phone"
            className=" input "
          />
        </div>
        <div className="form-group">
          <input type="submit" value="save for next orders" className="btn " />
        </div>
      </form>
    </UserInfoFormSection>
  );
};

export default UserInfoForm;
