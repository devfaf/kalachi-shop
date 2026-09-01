export type Category = {
    readonly id: string;
    name:string;
    slug:string;
}

export const categories: Category[] = [
    {
        id:'tv',
        name:'تلوزیون',
        slug:'tv'
    },
    {
        id:'mobile',
        name:'موبایل',
        slug:'mobile'
    },
    {
        id:'laptop',
        name:'لپ تاپ',
        slug:'laptop'
    }
]
