import { useParams } from "react-router-dom";
import { MOCK_ALBUMS } from "../../shared/mocks/constants";
import styles from "./AlbumsPhotos.module.css";
import { NotFound } from "../NotFound/NotFound";

export const AlbumsPhotos = () => {
  const { id } = useParams();
  const album_current = id
    ? MOCK_ALBUMS.find((item) => item.id == +id)
    : undefined;
  return (
    <div className={styles.section}>
      {album_current ? (
        <>
          <div className={styles.name}>{`Фотографии ${id} альбома`}</div>
          <div className={styles.album}>
            {album_current?.album.map((img) => (
              <img width={200} height={200} src={img} />
            ))}
          </div>
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
};
