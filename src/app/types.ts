export interface Video {
  id: string;
  title: string;
  author: string;
  viewDetails: ViewDetail[];
}

export interface ViewDetail {
  age: number;
  region: string;
  date: string;
}
