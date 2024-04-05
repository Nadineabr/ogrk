export type KeyValue = {
    [key: string]: string;
};

export interface GraphQLResponse<T> {
    data: T;
}
