import { Callback } from '../contracts/Alias';
import { UserProps } from '../contracts/UserContracts';
import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';

export class User {
	public events: Eventing = new Eventing();

	constructor(private data: UserProps) {}

	get(propName: string): string | number {
		return this.data[propName];
	}

	set(update: UserProps): void {
		Object.assign(this.data, update);
	}
}
