export interface User {
  no?: number;
  _id?: string;
  user: string;
  password: string;
  admin?: boolean;
  dateCreated?: Date;
}
