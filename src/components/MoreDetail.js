import React from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

const MoreDetail = ({ tab }) => {
  const params = useParams();
  const mov = tab.find((el) => el.id === Number(params.id));

  if (!mov) {
    return <div>Movie not found</div>;
  }

  const videoOpts = {
    width: "100%",
    playerVars: {
      autoplay: 1
    }
  };

  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <div style={{ maxWidth: "800px", width: "100%", position: "relative" }}>
        <YouTube videoId={getYouTubeVideoId(mov.trailer)} opts={videoOpts} />
        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", padding: "20px", marginTop: "10px" }}>
          <p style={{ color: "white", textAlign: "center", margin: 0 }}>{mov.text}</p>
        </div>
      </div>
    </div>
  );
};

function getYouTubeVideoId(url) {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?.*\bv=|v\/|embed\/|user\/(?:\w+\/\w+|[\w]+#\w\/\w+)))([^#?]*).*/);
  return (match && match[1]) || "";
}

export default MoreDetail;
