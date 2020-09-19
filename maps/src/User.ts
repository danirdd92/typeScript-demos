import faker from 'faker';
import { IMap } from './CustomMap';

export class User implements IMap {
	name: string;
	location: {
		lat: number;
		lng: number;
	};

	constructor() {
		this.name = `${faker.name.findName()} ${faker.name.lastName()}`;
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude()),
		};
	}
	markerContent(): string {
		return `User name is: ${this.name}`;
	}
}
