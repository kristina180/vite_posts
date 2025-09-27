import { useNavigate } from "react-router-dom";
import { useGetPhotosByAlbumIdQuery } from "../../entities/albums/api/albumsApi";
import styles from "./AlbumsPhotos.module.css";
import { photoError } from "../../shared/mocks/constants";

interface AlbumWithPhotosProps {
  albumId: number;
  title?: string;
}

export const AlbumWithPhotos = ({
  albumId,
  title = `Фотографии ${albumId} альбома`,
}: AlbumWithPhotosProps) => {
  const {
    data: photos,
    isLoading,
    error,
  } = useGetPhotosByAlbumIdQuery(albumId);
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/albums/${albumId}/photos`);
  }

  if (isLoading) return <p>Загрузка фото альбома "{title}"...</p>;
  if (error || !photos || photos.length === 0) return null;

  return (
    <div className={styles.album} onClick={handleClick}>
      <h3>{title}</h3>

      <div className={styles.photos}>
        {photos.slice(0, 5).map((photo) => (
          <img
            key={photo.id}
            src={photo.url}
            alt={photo.title}
            width={160}
            height={160}
            onError={(e) => {
              e.currentTarget.src = photoError;
            }}
          />
        ))}
      </div>
    </div>
  );
};
