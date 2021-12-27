import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Input, Submit } from '../../Login/Styles';
import { AuthActions } from '../../../store/reducers/auth/authActions';

const SecurityForm: FC = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (userData) => {
    dispatch(AuthActions.login(userData.username, userData.password));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder="old password" {...register('oldPassword', { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      <Input placeholder="new password" {...register('newPassword', { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      <Input
        placeholder="repeat new password"
        {...register('repeatNewPassword', { required: true })}
      />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      <Submit />
    </form>
  );
};

export default SecurityForm;
