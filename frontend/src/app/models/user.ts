export class User {
    constructor(
    public _id: string = '',
    public name: string = '',
    public nit: string = '',
    public billing_email: string = '',
    public phoneNumber: number = 0,
    public adress: string = '',
    public password: string = '',
    public identification: string = '',
    public contac_email: string = '',
    public getToken: boolean = false,
    public typeUser: number = 1
    ) {}
}