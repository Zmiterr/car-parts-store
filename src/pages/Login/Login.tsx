import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';
import { H2 } from '../../shared/styled/headers/H2';
import { StyledCard, CardBody } from '../../shared/styled/containers/Card';
import { Input, Submit } from './styles';
import { AuthActions } from '../../store/reducers/auth/authActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

interface ILoginData {
  username: string;
  password: string;
}

const Login: FC = () => {
  const dispatch = useDispatch();
  const { isAuth } = useTypedSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (loginData: ILoginData) => {
    dispatch(AuthActions.login(loginData.username, loginData.password));
  };
  return (
    <StyledCard>
      <CardBody>
        <div>
          <H2>Login</H2>
          {
            // TODO send visible props to loader
            isAuth ? (
              <div style={{ display: 'inline-block' }}>
                <Loader
                  type="Oval"
                  color="#000000"
                  height={20}
                  width={20}
                  timeout={3000} // 3 secs
                />
              </div>
            ) : (
              <div />
            )
          }
        </div>

        <p>Dont have an account yet? Register now!</p>
        <div>
          <input type="radio" value="Customer" name="gender" /> Customer
          <input type="radio" value="Dealer" name="gender" /> Dealer
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input {...register('username')} /> {/* register an input */}
          <Input type="password" {...register('password', { required: true })} />
          {errors.lastName && <p>Last name is required.</p>}
          <Submit />
        </form>
      </CardBody>
    </StyledCard>
  );
};

export default Login;
