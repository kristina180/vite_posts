import { useNavigate, useOutletContext } from "react-router-dom";
import type { IUser } from "../../shared/mocks/constants";
import { MOCK_ALBUMS } from "../../shared/mocks/constants";
import styles from "./UserAlbums.module.css";

export const UserAlbums = () => {
  const { album_id } = useOutletContext<IUser>();
  const album_current = MOCK_ALBUMS.find((item) => item.id == album_id);
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/albums/${album_id}/photos`);
  }
  return (
    <div className={styles.section} onClick={handleClick}>
      <p>Альбом номер {album_id}</p>
      {album_current ? (
        <>
          {album_current?.album.map((img) => (
            <img width={200} height={200} src={img} />
          ))}
        </>
      ) : (
        <div>Альбом не найден</div>
      )}
    </div>
  );
};
