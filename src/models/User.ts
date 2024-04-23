interface User {
  isLogged: boolean;
  token: string;
  userInfo?: UserInfo;
}
type UserInfo = {
  about:string;
  address:string;
  coins: number;
  createdAt: string;
  email: string;
  googleId: string;
  id: string;
  isActive: boolean;
  level: number;
  nonce: string;
  profilePicture: string;
  publicName: string;
  role: string;
  username: string;
};