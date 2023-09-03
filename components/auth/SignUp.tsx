'use client';

import { useSignupMutation } from '@/redux/api/services/userApi';
import { Box, Button, TextField, Typography, styled } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import './styles.css';

const CustomTextField = styled(TextField)({
  fontFamily: 'Lato',
  fontWeight: 400,
  fontSize: '1.2rem',
  marginBottom: '1rem',
  width: '100%',
  '&:active': {
    border: 'black',
  },
  '&.Mui-active': {
    border: 'none',
  },
});

type UserData = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
};
const SignUp = () => {
  const [signup, { isLoading, isSuccess, error }] = useSignupMutation();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>();

  const onSubmit: SubmitHandler<UserData> = async (data) => {
    try {
      await signup(data);
    } catch (err) {
      console.log(err);
    }
  };
  if (isSuccess === true) {
    window.location.replace('/user/login');
  }
  return (
    <Box className="auth">
      <Box
        className="auth-container"
        sx={{
          boxShadow: { sm: 2, md: 2 },
          borderRadius: { sm: '15px' },
          backgroundColor: '#fff',
        }}
      >
        <Box className="auth-img-container">
          <Image
            width={300}
            height={400}
            alt="register"
            priority={true}
            src="https://images.unsplash.com/photo-1674049405160-9b800f5645f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            className="auth-img"
          />
        </Box>
        <Box className="auth-main">
          <Box className="auth-text">
            <Typography
              variant="h1"
              sx={{
                fontFamily: 'Lato',
                fontWeight: 900,
                fontSize: '1.8rem',
              }}
            >
              The Journey Begins...
            </Typography>
          </Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              {error && (
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 400,
                    color: '#fff',
                    padding: '1rem',
                    backgroundColor: '#F25433',
                    borderRadius: '5px',
                    fontSize: '0.8rem',
                    textAlign: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  {JSON.stringify(error.data)}
                </Typography>
              )}
            </div>
            <div>
              <div>
                <CustomTextField
                  variant="outlined"
                  fullWidth
                  type="text"
                  placeholder="username"
                  {...register('name', { required: 'Enter your username' })}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              </div>
              <div>
                <CustomTextField
                  type="email"
                  placeholder="aries@gmail.com"
                  {...register('email', { required: 'Enter your email' })}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              </div>
              <div>
                <CustomTextField
                  type="password"
                  placeholder="password"
                  {...register('password', { required: 'Enter your password' })}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  inputProps={{ minLength: 6 }}
                />
              </div>
              <div>
                <CustomTextField
                  type="password"
                  placeholder="Confirm Password"
                  {...register('confirm_password', {
                    required: 'Re-enter password',
                    validate: (val: string) => {
                      if (watch('password') != val) {
                        return 'Password and confirm password does not match!';
                      }
                    },
                  })}
                  error={!!errors.confirm_password}
                  helperText={errors.confirm_password?.message}
                />
              </div>
              <div className="auth-btn-container">
                <Button variant="contained" type="submit" disabled={isLoading}>
                  Register{' '}
                  <BsFillArrowRightCircleFill className="auth-btn-icon" />
                </Button>
              </div>
            </div>
            <div>
              <p>
                Already registered? <Link href="/user/login">Login</Link>
              </p>
            </div>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
