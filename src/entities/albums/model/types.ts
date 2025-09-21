export interface IPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface IAlbum {
  userId: number;
  id: number;
  title: string;
}
