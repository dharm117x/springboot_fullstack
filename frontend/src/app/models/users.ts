export interface User {
  id?: number; // ID is optional for new users that haven't been created yet
  name: string;
  email: string;
  phone: string;
}
