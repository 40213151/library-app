import { Book } from "@prisma/client";

export interface BookRepositoryInterface {
  create(title: string): Promise<Book>;
  findById(title: string): Promise<Book | null>;
}
