export interface UserDataInterface {
  id: number;
  login: string;
  role: string;
  password: string;
}

export interface UserInterface {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  location: string;
  role: string;
  userData: UserDataInterface[];
  avatarUrl: string;
}
