export type SVGImage = Record<string, () => JSX.Element>;
export type NavProps = {
  path: string;
  name: string;
  needLogin: boolean;
};
export type LoginFormValue = {
  name: string;
  nickname: string;
  email: string;
  password: string;
  password_confirm: string;
};
