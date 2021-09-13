export interface LoginInterfaceServers {
  token: string;
  refreshToken: string;
  expiredAt: string;
  user: {
    id: string;
    username: string;
    email: string;
    reset_password_token: string;
    avatar: string;
    status: string;
  };
}