import { UserProps } from '../contracts/UserContracts';
import { Eventing } from './Eventing';
import { Sync } from './Sync';

const url = 'http://localhost:3000';

export class User {
	public events: Eventing = new Eventing();
	public sync: Sync<UserProps> = new Sync<UserProps>(url);
	constructor(private data: UserProps) {}

	get(propName: string): string | number {
		return this.data[propName];
	}

	set(update: UserProps): void {
		Object.assign(this.data, update);
	}
}
