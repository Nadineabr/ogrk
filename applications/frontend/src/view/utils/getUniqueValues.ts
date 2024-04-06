export const getUniqueValues = (data: any, value: string) => {
    const values: string[] = [];
    let uniqueNames = [''];

    !!data?.length && data?.forEach((key: any) => {
        values.push(key[value])

        uniqueNames = Array.from(new Set(values));
    })
    return uniqueNames;
};
