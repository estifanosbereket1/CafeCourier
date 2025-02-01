export interface IRegistration {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  phoneNumber: string;
  allergy?: string[];
  age?:string
}

export interface ILogin{
    email:string;
    password:string
}