import React, { useEffect, useState } from "react";
import Categorybadge from "./CategoryBadge/CategoryBadge";
import "./styles.css";

const PostCard = ({ post }) => {
  const [linkPreview, setLinkPreview] = useState(null);

  useEffect(() => {
    // const fetchLinkPreview = async () => {
    //   try {
    //     const response = await fetch(
    //       `https://api.linkpreview.net/?q=${encodeURIComponent(
    //         post.link,
    //       )}`,
    //       {
    //         headers: {
    //           "X-Linkpreview-Api-Key":
    //             process.env.REACT_APP_LINKPREVIEW_API_KEY,
    //         },
    //       },
    //     );
    //     const data = await response.json();
    //     setLinkPreview(data);
    //   } catch (error) {
    //     console.error("Error fetching link preview:", error);
    //   }
    // };
    // fetchLinkPreview();
  }, []);

  console.log(post)

  return (
    <div className="post-container">
      <div className="post-user-info">
        <div className="user-info">
          <img
            className="user-info-photo"
            src={require("../../assets/avatar.avif")}
            alt=""
          />
          <p className="user-info-name">{post?.author?.name}</p>
        </div>
        <p className="user-info-email">{post?.author?.email}</p>
        <Categorybadge category={post?.category} />
      </div>
      <div className="post-content">
        <div className="content-title">{post?.title}</div>
        <div className="content-text">
          {post?.description}
        </div>
        <div className="content-embed">
          {linkPreview ? (
            <a className="link-preview" target="_blank" rel="noreferrer" href={post.link}>
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
