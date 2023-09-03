'use client';

import { Box, Button, TextField, Typography, styled } from '@mui/material';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
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

type FormValues = {
  email: string;
  password: string;
};
const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const [error, setError] = useState('');
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    })
      .then((result: any) => {
        if (result.error) {
          setError('Invalid email or password');
          return;
        }
        window.location.replace('/dashboard');
      })
      .catch((e: any) => console.log(e));
  };
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
            priority={true}
            alt="login"
            src="https://images.unsplash.com/photo-1578909196400-59f8f8156a05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
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
              Great To Have You Back
            </Typography>
          </Box>
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
                {JSON.stringify(error)}
              </Typography>
            )}
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div>
                <CustomTextField
                  variant="outlined"
                  fullWidth
                  type="email"
                  placeholder="aries@gmail.com"
                  {...register('email', {
                    required: 'You need to provide an email',
                  })}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              </div>
              <div>
                <CustomTextField
                  type="password"
                  placeholder="password"
                  {...register('password', {
                    required: 'You need to provide password',
                  })}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
              </div>
              <div className="auth-btn-container">
                <Button variant="contained" type="submit">
                  Login <BsFillArrowRightCircleFill className="auth-btn-icon" />
                </Button>
              </div>
            </div>
            <div>
              <p>
                Don't have an account? <Link href="/user/signup">Register</Link>
              </p>
            </div>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;
