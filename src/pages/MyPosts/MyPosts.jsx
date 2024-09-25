import React, { useEffect, useState } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import MainTitle from '../../components/MainTitle/MainTItle';
import { FaUser } from 'react-icons/fa';
import PostCard from '../../components/PostCard/PostCard';
import { IoReturnDownBack } from "react-icons/io5";
import { jwtDecode } from 'jwt-decode';
import useFetch from '../../hooks/useFetch';
import { GET_USER_POSTS } from '../../api';
import MyPostCard from '../../components/MyPostCard/MyPostCard';
import ConfirmDeletePost from './ConfirmDeletePost/ConfirmDeletePost';

const MyPosts = () => {
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(false);

  const token = localStorage.getItem("token");
  const { user_id } = jwtDecode(token);

  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    setTimeout(() => {
      const getPosts = async () => {
        const token = localStorage.getItem("token");
        const { url, options } = GET_USER_POSTS(user_id, token);
        await request(url, options);
      };

      getPosts();
    }, 1000);
  }, [refresh]);

  console.log(data);

  return (
    <div className="feed">
      <section className="feed-main">
        <div className="feed-main-header">
          <MainTitle content="Meus Posts" />
          <div style={{ display: "flex", gap: "8px" }}>
            <Button
              className="btn-secondary"
              label="Voltar"
              icon={<IoReturnDownBack size={32} />}
              onClick={() => navigate("/feed")}
            />
          </div>
        </div>
        <div className="feed-main-posts">
          {loading || !data ? (
            <MainTitle content="Carregando posts..." />
          ) : (
            data.map((post, index) => {
              return <MyPostCard key={index} post={post} refresh={() => setRefresh((v) => !v)} />;
            })
          )}
        </div>
      </section>
    </div>
  );
}

export default MyPosts;