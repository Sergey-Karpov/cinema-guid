import React from "react";

interface MoviePlayerProps {
  url: string | undefined;
}

const MoviePlayer: React.FC<MoviePlayerProps> = ({ url }) => {
  const embedUrl = `https://www.youtube.com/embed/${url}?autoplay=1`;

  return (
    <iframe
      title="YouTube video player"
      width={960}
      height={540}
      src={embedUrl}
      allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
    ></iframe>
  );
};

export default MoviePlayer;
