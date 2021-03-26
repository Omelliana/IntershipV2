export class User {
  private statuses = ['Приостановлена', 'Подписка активна', 'Заблокирован'];

  constructor(public id: number, public name: string, public fname: string,
              public mname: string, public status: number, public lastUpdatedAt: Date,
              public avatar: string, public balance: string) {
  }

  // вернуть статус пользователя
  public getStatus(): string{
    return this.statuses[this.status];
  }
}
