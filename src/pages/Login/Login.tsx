import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';
import { useHistory } from 'react-router-dom';
import { H2 } from '../../shared/styled/headers/H2';
import { StyledCard, CardBody } from '../../shared/styled/containers/Card';
import { Input, Submit } from './Styles';
import { AuthActions } from '../../store/auth/authActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { TransparentButton } from '../../shared/styled/Elements/TransparentButton';

interface LoginData {
  username: string;
  password: string;
}
interface NewUserData {
  username: string;
  password: string;
  role: string;
}

const Login: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [enterType, setEnterType] = useState<'login' | 'auth'>('login');
  const { isLoading, isAuth } = useTypedSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onLogin = (loginData: LoginData) => {
    dispatch(AuthActions.login(loginData.username, loginData.password));
  };
  const onCreateAccount = (newUSerData: NewUserData) => {
    dispatch(AuthActions.createUser(newUSerData.username, newUSerData.password, newUSerData.role));
  };
  // TODO move to Actions
  if (isAuth) history.push('/profile');
  return (
    <StyledCard>
      <CardBody>
        {enterType === 'login' ? (
          <>
            <div>
              <H2>Login</H2>
              <div style={{ display: 'inline-block' }}>
                <Loader
                  visible={isLoading}
                  type="Oval"
                  color="#000000"
                  height={20}
                  width={20}
                  timeout={1000}
                />
              </div>
            </div>
            <p>
              Dont have an account yet?{' '}
              <TransparentButton onClick={() => setEnterType('auth')}>
                Register now!
              </TransparentButton>
            </p>
            <form onSubmit={handleSubmit(onLogin)}>
              <Input {...register('username')} /> {/* register an input */}
              <Input type="password" {...register('password', { required: true })} />
              {errors.lastName && <p>Last name is required.</p>}
              <Submit />
            </form>
          </>
        ) : (
          <>
            <div>
              <H2>Create account</H2>
              <div style={{ display: 'inline-block' }}>
                <Loader
                  visible={isLoading}
                  type="Oval"
                  color="#000000"
                  height={20}
                  width={20}
                  timeout={1000}
                />
              </div>
            </div>
            <p>
              Do you have an account?{' '}
              <TransparentButton onClick={() => setEnterType('login')}>login</TransparentButton>
            </p>
            <div>
              <input type="radio" value="Customer" name="gender" /> Customer
              <input type="radio" value="Dealer" name="gender" /> Dealer
            </div>
            <form onSubmit={handleSubmit(onCreateAccount)}>
              <Input {...register('username')} /> {/* register an input */}
              <Input type="password" {...register('password', { required: true })} />
              {errors.lastName && <p>Last name is required.</p>}
              <Submit />
            </form>
          </>
        )}
      </CardBody>
    </StyledCard>
  );
};

export default Login;
