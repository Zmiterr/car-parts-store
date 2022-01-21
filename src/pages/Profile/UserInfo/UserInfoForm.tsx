import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Input, Submit } from '../../Login/Styles';
import { UserProfileDataInterface } from '../../../store/user/types';
import UserService from '../../../api/UserService';

type UserInfoFormProps = {
  user: UserProfileDataInterface;
};

const UserInfoForm: FC<UserInfoFormProps> = ({ user: { firstName, lastName, email, phone } }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName,
      lastName,
      phone,
      email,
    },
  });
  console.log(firstName);
  const onSubmit = (userData: UserProfileDataInterface) => {
    dispatch(UserService.updateUser(1, userData));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input type="text" placeholder="first name" {...register('firstName')} />{' '}
      <Input type="text" placeholder="last name" {...register('lastName')} />{' '}
      <Input type="tel" placeholder="phone" {...register('phone')} /> {/* register an input */}
      <Input type="email" placeholder="email" {...register('email')} /> {/* register an input */}
      {errors.lastName && <p>Last name is required.</p>}
      <Submit />
    </form>
  );
};

export default UserInfoForm;
