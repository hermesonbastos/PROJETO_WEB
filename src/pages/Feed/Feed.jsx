import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import CreatePostModal from "../../components/CreatePostModal/CreatePostModal";
import MainTitle from "../../components/MainTitle/MainTItle";
import PostCard from "../../components/PostCard/PostCard";
import "./styles.css";
import useFetch from "../../hooks/useFetch";
import { GET_POSTS } from "../../api";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const [showCreatePostModal, setShowCreatePostModal] = useState(false);

  const { data, error, loading, request } = useFetch();

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      const getPosts = async () => {
        const token = localStorage.getItem("token");
        const { url, options } = GET_POSTS(token);
        await request(url, options);
      };

      getPosts();
    }, 1000);
  }, [showCreatePostModal]);

  console.log(data);

  return (
    <div className="feed">
      <CreatePostModal
        showModal={showCreatePostModal}
        setShowModal={setShowCreatePostModal}
      />
      <section className="feed-main">
        <div className="feed-main-header">
          <MainTitle content="Feed" />
          <div style={{ display: "flex", gap: "8px" }}>
            <Button
              className="btn-secondary"
              label="PERFIL"
              icon={<FaUser />}
              onClick={() => navigate("/myPosts")}
            />
            <Button
              className="btn-primary-slim"
              label="PUBLICAR"
              onClick={() => setShowCreatePostModal(true)}
            />
          </div>
        </div>
        <div className="feed-main-posts">
          {loading || !data ? (
            <MainTitle content="Carregando posts..." />
          ) : (
            data.map((post, index) => {
              return <PostCard key={index} post={post} />;
            })
          )}
        </div>
      </section>
    </div>
  );
};

export default Feed;
