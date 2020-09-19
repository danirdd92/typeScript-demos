// import fs from 'fs';

// export abstract class CsvFileReader<T> {
// 	data: T[] = [];

// 	constructor(public path: string) {
// 		this.read();
// 	}

// 	protected abstract mapRow(row: string[]): T;

// 	protected read(): void {
// 		this.data = fs
// 			.readFileSync(this.path, {
// 				encoding: 'utf-8',
// 			})
// 			.split('\n')
// 			.map((row: string): string[] => {
// 				return row.split(',');
// 			})
// 			.map(this.mapRow);
// 	}
// }
