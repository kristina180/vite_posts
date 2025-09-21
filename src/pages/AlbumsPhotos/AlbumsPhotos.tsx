import { useParams } from "react-router-dom";

import { AlbumWithPhotos } from "./AlbumsWithPhotos";

export const AlbumsPhotos = () => {
  const { id } = useParams();

  return <>{id ? <AlbumWithPhotos albumId={+id} /> : <div>Не найден</div>}</>;
};
