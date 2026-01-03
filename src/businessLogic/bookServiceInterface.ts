import { Book } from "@prisma/client";

export interface BookServiceInterface {
  add(title: string): Promise<Book>;
  findById(title: string): Promise<Book | null>;
}
