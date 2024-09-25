import React, { useEffect, useState } from "react";
import Categorybadge from "./CategoryBadge/CategoryBadge";
import "./styles.css";

const PostCard = ({ post }) => {
  const [linkPreview, setLinkPreview] = useState(null);

  useEffect(() => {
    const fetchLinkPreview = async () => {
      try {
        const response = await fetch(
          `https://api.linkpreview.net/?q=${encodeURIComponent(
            "https://www.w3schools.com/html/",
          )}`,
          {
            headers: {
              "X-Linkpreview-Api-Key":
                process.env.REACT_APP_LINKPREVIEW_API_KEY,
            },
          },
        );
        const data = await response.json();
        setLinkPreview(data);
      } catch (error) {
        console.error("Error fetching link preview:", error);
      }
    };
    fetchLinkPreview();
  }, []);

  return (
    <div className="post-container">
      <div className="post-user-info">
        <div className="user-info">
          <img
            className="user-info-photo"
            src={require("../../assets/react.png")}
            alt=""
          />
          <p className="user-info-name">hermeson</p>
        </div>
        <p className="user-info-email">hermesonbastos@gmail.com</p>
        <Categorybadge />
      </div>
      <div className="post-content">
        <div className="content-title">Lorem Ipsum</div>
        <div className="content-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </div>
        <div className="content-embed">
          {linkPreview ? (
            <a className="link-preview" target="_blank" rel="noreferrer" href={"https://www.w3schools.com/html/"}>
              <p className="link-preview-title">{linkPreview.title}</p>
              <div className="preview-image-container">
                <img
                  src={linkPreview.image}
                  alt={linkPreview.title}
                  className="link-preview-image"
                />
              </div>
            </a>
          ) : (
            <p>Loading link preview...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
