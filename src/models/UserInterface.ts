interface USerDataInterface {
  id: number;
  login: string;
  role: string;
}

export interface UserInterface {
  username: string;
  password: string;
  role: string;
  userData: USerDataInterface[];
}
