import { PATHS } from '@/constants/page-paths';
import {
  apiForgotPassword,
  apiRegister,
  apiResetPassword,
  apiSignIn,
  apiSignOut,
  apiVerifyEmail,
} from '@/services/auth.api';
import { useTokenStore, useUserStore } from '@/store';
import { UseSignOutProps } from '@/types/others';

import { useMutation } from 'react-query';

import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const { token, setToken } = useTokenStore();
  const { setAuthenticated, setUser, isAuthenticated } = useUserStore();
  const navigate = useNavigate();

  const signInUser = (data: Record<string, unknown>) => {
    const { token, is2faEnabled, ...userInfo } = data || {};
    if (!is2faEnabled) {
      setToken(token as string);
      setAuthenticated(true);
      setUser(userInfo);
      navigate(PATHS.PROFILE, { replace: true });
    }
  };

  const {
    mutateAsync: signIn,
    isLoading: isSignInPending,
    ...singInData
  } = useMutation({
    mutationFn: apiSignIn,
    onSuccess: (res) => {
      // invalidateQuery(['twin']);
      signInUser(res?.data?.data);
    },
  });

  const {
    mutateAsync: logOut,
    isLoading: isSingOutPending,
    ...signOutData
  } = useMutation({
    mutationFn: apiSignOut,
    onSuccess: () => {
      setToken(null);
    },
  });
  const signOut = async ({
    apiCall = true,
    state,
    redirect,
  }: UseSignOutProps = {}) => {
    if (apiCall) await logOut();
    setAuthenticated(false);
    setUser(null);
    navigate(redirect ?? PATHS.LANDING, { replace: true, state });
  };

  const registerUser = useMutation({
    mutationFn: apiRegister,
  });

  const {
    mutateAsync: verifyEmail,
    isLoading: isVerifyPending,
    ...verifyData
  } = useMutation({
    mutationFn: apiVerifyEmail,
  });

  const forgotPassword = useMutation({
    mutationFn: apiForgotPassword,
  });

  const resetPassword = useMutation({
    mutationFn: apiResetPassword,
  });

  return {
    singInData,
    signIn,
    isSignInPending,
    isAuthenticated,
    token,
    isSingOutPending,
    signOut,
    signOutData,
    registerUser,
    verifyEmail,
    isVerifyPending,
    verifyData,
    forgotPassword,
    resetPassword,
    signInUser,
  };
};
