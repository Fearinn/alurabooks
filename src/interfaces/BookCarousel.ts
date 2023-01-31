import { Dispatch, SetStateAction } from "react";
import IBook from "./Book";

export default interface IBookCarousel {
    select: Dispatch<SetStateAction<IBook>>;
    books: IBook[],
    previous: IBook
}