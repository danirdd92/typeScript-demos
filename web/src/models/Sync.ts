import axios, { AxiosPromise } from 'axios';
import { HasId } from '../contracts/UserContracts';

export class Sync<T extends HasId> {
	constructor(public rootUrl: string) {}

	fetch(id: number): AxiosPromise {
		return axios.get(`${this.rootUrl}/${id}`);
	}

	save(data: T): AxiosPromise {
		const { id } = data;

		if (id) return axios.put(`${this.rootUrl}/users/${id}`, data);

		return axios.post(this.rootUrl, data);
	}
}
