
export interface Resolver<T> {
    resolve(data: T): void;
    reject(error: any): void;
}