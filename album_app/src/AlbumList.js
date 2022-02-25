import React from "react";
import { useState, useEffect } from "react";
import Album from "./Album";

function AlbumList({ user = {}, originalTitle }) {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    setAlbums([]);
    const abortController = new AbortController();
    const loadAlbums = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/albums?userId=${user.id}`,
          { signal: abortController.signal }
        );
        const data = await response.json();
        setAlbums(data);
      } catch (error) {
		   console.log(error)
      }
    };
    loadAlbums();

    return () => {
      abortController.abort();
    };
  }, [user]);

  return user.name ? (
    <div>
      <h2>{user.name}</h2>
      <ul>
        {albums.map((album, index) => (
        <Album album={album} index={index} />
        ))}
      </ul>
    </div>
  ) : (
    <p>Click an artist to the left</p>
  );
}

export default AlbumList;