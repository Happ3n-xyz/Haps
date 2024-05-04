interface User {
  isLogged: boolean;
  token: string;
  user?: UserInfo;
}
type UserInfo = {
  address:string;
  createdAt: string;
  id: string;
  isActive: boolean;
  nonce: string;
  publicName: string;
  role: string;
  username: string;
};