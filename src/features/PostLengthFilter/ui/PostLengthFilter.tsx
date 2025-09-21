import { filterByLength } from "../lib/filterByLength";

import type { IPost } from "../../../entities/posts/api/postsApi";
import React, { useState, type FC } from "react";

import styles from "./PostLengthFilter.module.css";
import { useTheme } from "../../../shared/lib/theme/UseTheme";

interface IProps {
  posts: IPost[];
  onFilter: (filteredPosts: IPost[]) => void;
}

export const PostLengthFilter: FC<IProps> = ({ posts, onFilter }) => {
  const [minLength, setMinLength] = useState<number>(0);
  const { theme } = useTheme();

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = Number(e.target.value);
    setMinLength(value);
    const filtered = filterByLength(posts, value);
    onFilter(filtered);
  }

  return (
    <div className={`${styles.section} ${styles[theme]}`}>
      <select value={minLength} onChange={handleChange}>
        <option value={0}>Все</option>
        <option value={10}>Больше 10</option>
        <option value={15}>Больше 15</option>
        <option value={20}>Больше 20</option>
      </select>
    </div>
  );
};
