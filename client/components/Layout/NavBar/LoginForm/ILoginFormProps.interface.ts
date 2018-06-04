export interface ILoginFormProps {
  username: string;
  login: (payload: ILoginPayload) => void;
  loginError: string;
  loginLoading: boolean;
  logout: () => void;
  logoutLoading: boolean;
}

interface ILoginPayload {
  username: string;
  password: string;
}
