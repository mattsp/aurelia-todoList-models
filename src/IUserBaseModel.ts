export interface IUserBaseModel {
    name?: string,
    surname?: string,
    pseudo: string,
    password: string,
    tel?: string,
    mobile?: string,
    birthDay?: Date;
    createdAt?: Date;
    updatedAt?: Date;
}