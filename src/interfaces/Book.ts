export default interface IBook {
    id: number;
    author: string;
    title: string;
    summary: string;
    price: number;
    favorite?: boolean;
    img?: string;
}