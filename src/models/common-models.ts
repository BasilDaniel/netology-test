export interface ICollection<I> {
  items: I[];
  currentPage: number;
  lastPage: number;
  pageSize: number;
  total: number;
}

export interface IErrorData {
  data: {
    message: string;
    errors: any;
  };
  status: number;
}
