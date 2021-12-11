import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { H2 } from '../../shared/styled/headers/H2';
import { StyledCard, CardBody } from '../../shared/styled/containers/Card';
import { Input } from './styles';

interface ILoginData {
  login: string;
  password: string;
}

const Login: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (loginData: ILoginData) => loginData;
  return (
    <StyledCard>
      <CardBody>
        <H2>Login</H2>
        <p>Dont have an account yet? Register now!</p>
        <div>
          <input type="radio" value="Customer" name="gender" /> Customer
          <input type="radio" value="Dealer" name="gender" /> Dealer
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input {...register('login')} /> {/* register an input */}
          <Input type="password" {...register('password', { required: true })} />
          {errors.lastName && <p>Last name is required.</p>}
          <input type="submit" />
        </form>
      </CardBody>
    </StyledCard>
  );
};

export default Login;
