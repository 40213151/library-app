import { Book } from "../entities/book";

export interface BookRepositoryInterface {
  create(book: Book): Promise<Book>;
  // findById(title: string): Promise<Book | null>;
}
