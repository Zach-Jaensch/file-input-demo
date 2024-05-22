export interface File {
  name: string;
}
export interface Folder extends File {
  items: (Folder | File)[];
}
