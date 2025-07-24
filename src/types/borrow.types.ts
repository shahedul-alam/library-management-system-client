type Book = {
  title: string;
  isbn: string;
};

export type Borrow = {
  totalQuantity: number;
  book: Book;
};
