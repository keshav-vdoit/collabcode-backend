export type UseSignOutProps = {
  redirect?: string;
  apiCall?: boolean;
  state?: { message?: string; type: 'success' | 'destructive' };
};
