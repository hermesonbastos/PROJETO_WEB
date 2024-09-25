import Button from "../../components/Button/Button";
import MainTitle from "../../components/MainTitle/MainTItle";
import PostCard from "../../components/PostCard/PostCard";
import "./styles.css";

const Feed = () => {
  return <div className="feed">
    <section className="feed-main">
      <div className="feed-main-header">
        <MainTitle content="Feed" />
        <Button className="btn-primary-slim" label="PUBLICAR" />
      </div>
      <div className="feed-main-posts">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </section>
  </div>
}

export default Feed;