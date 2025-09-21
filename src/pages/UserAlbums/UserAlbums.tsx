import { useOutletContext } from "react-router-dom";
import type { IUser } from "../../shared/mocks/constants";
import styles from "./UserAlbums.module.css";
import { useGetAlbumsByUserQuery } from "../../entities/albums/api/albumsApi";
import { AlbumWithPhotos } from "../AlbumsPhotos/AlbumsWithPhotos";

export const UserAlbums = () => {
  const user = useOutletContext<IUser>();

  const {
    data: albums,
    isLoading: albumsLoading,
    error: albumsError,
  } = useGetAlbumsByUserQuery(user.id);

  if (albumsLoading) return <p>Загрузка альбомов...</p>;
  if (albumsError) return <p>Ошибка при загрузке альбомов</p>;
  if (!albums || albums.length === 0) return <p>У пользователя нет альбомов</p>;
  return (
    <div className={styles.section}>
      {albums.map((album) => (
        <AlbumWithPhotos
          key={album.id}
          albumId={album.id}
          title={album.title}
        />
      ))}
    </div>
  );
};
