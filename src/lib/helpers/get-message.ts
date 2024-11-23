export interface ApiError {
  response?: {
    data?: {
      message?: string;
    };
    message?: string;
  };
  message?: string;
}

export const getErrorMessage = (error: unknown): string => {
  if (typeof error === 'object' && error !== null) {
    const err = error as ApiError;
    return (
      err?.response?.data?.message ||
      err?.message ||
      err?.response?.message ||
      'An unknown error occurred'
    );
  }
  return 'An unknown error occurred';
};

export interface ApiResponse {
  data?: {
    message?: string;
  };
  message?: string;
}

export const getSuccessMessage = (res: ApiResponse): string => {
  return res?.data?.message || res?.message || 'Success';
};
