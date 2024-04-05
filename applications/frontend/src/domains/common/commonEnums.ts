export enum EstateType {
    apartment,
    house,
    commercial,
}

export type GetEstatesParams = {
    city?: string;
    type?: string;
    search?: string;
};