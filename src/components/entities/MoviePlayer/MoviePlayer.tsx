import React from "react";

interface MoviePlayerProps {
  url: string | undefined;
}

const MoviePlayer: React.FC<MoviePlayerProps> = ({ url }) => {
  const videoId = url?.split("v=")[1]?.split("&")[0];
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : "";

  return (
    <iframe
      width={960}
      height={540}
      src={embedUrl}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  );
};

export default MoviePlayer;
