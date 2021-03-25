export class User {
  constructor(public id: number, public name: string, public fname: string,
              public mname: string, public status: number, public lastUpdatedAt: Date,
              public avatar: string, public balance: string) {
  }
}
