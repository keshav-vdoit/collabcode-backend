import api from '@/services';

export const apiSignIn = async (payload: {
  email: string;
  password: string;
  remember?: boolean;
}) => {
  return await api.post(
    '/auth/sign-in',
    { remember: payload.remember },
    { auth: { username: payload.email, password: payload.password } }
  );
};

export const apiSignOut = async () => {
  return await api.post('/auth/sign-out');
};

export const apiRegister = async (payload: {
  email: string;
  password: string;
  referralCode?: string;
}) => {
  return await api.post('/auth/register', payload);
};

export const apiVerifyEmail = async (token: string) => {
  return await api.post('/auth/verify-email', { token });
};

export const apiForgotPassword = async (email: string) => {
  return await api.post('/auth/forgot-password', { email });
};

export const apiResetPassword = async (payload: {
  token: string;
  newPassword: string;
}) => {
  return await api.post('/auth/reset-password', payload);
};

export const apiSendOTP = async (email: string) => {
  return await api.post('/auth/resend-otp', { email });
};

export const apiVerifyOTP = async (payload: { email: string; otp: string }) => {
  return await api.post('/auth/verify-otp', payload);
};

export const apiVerifyNewEmail = async (token: string) => {
  return await api.post('/user/confirm-email', { token });
};

export const apiGetAppConfig = async () => {
  return await api.get('/app/configs', {
    withCredentials: false,
    headers: {
      'x-api-key': import.meta.env.VITE_CLIENT_KEY,
    },
  });
};

export const apiGoogleLogin = async () => {
  return await api.post('/oauth/google/request-url');
};

export const apiVerifyGoogleLogin = async (payload: {
  code: string;
  state: string;
}) => {
  return await api.post('/oauth/google/redirect-url', payload);
};
