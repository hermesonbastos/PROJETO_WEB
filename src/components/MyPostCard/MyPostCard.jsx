import React, { useEffect, useState } from "react";
import CategoryBadge from "./CategoryBadge/CategoryBadge";
import "./styles.css";
import { UPDATE_POST } from "../../api";
import Input from "../Input/Input";
import Button from "../Button/Button";
import useFetch from "../../hooks/useFetch";
import { FaRegEdit, FaTrash } from "react-icons/fa";
import ConfirmDeletePost from "../../pages/MyPosts/ConfirmDeletePost/ConfirmDeletePost";

const techCategories = [
  "Artificial Intelligence", "Machine Learning", "Deep Learning", "Data Science",
  "Cybersecurity", "Cloud Computing", "DevOps", "Big Data", "Blockchain",
  "Internet of Things (IoT)", "Web Development", "Mobile Development", 
  "Game Development", "Virtual Reality", "Augmented Reality", "Quantum Computing",
  "Edge Computing", "5G Networks", "Serverless Architecture", "Microservices",
  "Natural Language Processing", "Computer Vision", "Robotics", "Automation",
  "Software Testing", "Continuous Integration", "API Development", "Databases",
  "UI/UX Design", "Frontend Frameworks", "Backend Frameworks", "Docker", "Kubernetes",
  "CI/CD Pipelines", "Agile Methodologies", "Scrum", "Artificial Neural Networks",
  "Functional Programming", "Object-Oriented Programming", "Data Mining",
  "Software Architecture", "Network Security", "Penetration Testing", "Ethical Hacking",
  "SaaS (Software as a Service)", "PaaS (Platform as a Service)", "FaaS (Function as a Service)",
  "Quantum Cryptography", "Embedded Systems", "Low-code/No-code Platforms"
];

const MyPostCard = ({ post, refresh }) => {
  console.log(post)
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [description, setDescription] = useState(post.description);
  const [link, setLink] = useState(post.link);
  const [category, setCategory] = useState(post.category);
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);

  const { data, request, error, loading } = useFetch();

  const token = localStorage.getItem("token");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedPostData = {
      title,
      description,
      link,
      category,
    };

    const { url, options } = UPDATE_POST(post.id, updatedPostData, token);
    await request(url, options);
    setIsEditing(false);
    refresh();
  };

  return (
    <div className="post-container">
      <ConfirmDeletePost refresh={refresh} post_id={post.id} showModal={showConfirmDeleteModal} setShowModal={setShowConfirmDeleteModal} />
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
        <CategoryBadge category={post?.category} />
      </div>

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <Input
            label="Título"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            label="Conteúdo"
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            isTextarea={true}
          />
          <Input
            label="Link"
            type="text"
            name="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <div className="form-group">
            <label htmlFor="category">Categoria</label>
            <select
              id="category"
              name="category"
              className="input"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Selecione uma categoria</option>
              {techCategories.map((tech, index) => (
                <option key={index} value={tech}>
                  {tech}
                </option>
              ))}
            </select>
          </div>
          <div style={{ display: "flex", gap: "12px", justifyContent: "flex-end" }}>
            <Button className="btn-secondary" label="CANCELAR" onClick={() => setIsEditing(false)} type="button" />
            <Button className="btn-primary" label="ATUALIZAR" type="submit" />
          </div>
        </form>
      ) : (
        <div className="post-content">
          <div className="content-title">{post?.title}</div>
          <div className="content-text">{post?.description}</div>
          <div className="content-embed">
            <p>{link}</p>
          </div>
          <div style={{ display:"flex", gap: "12px", alignSelf: "flex-end" }}>
            <Button className="btn-secondary" onClick={() => setShowConfirmDeleteModal(true)} icon={<FaTrash />} />
            <Button className="btn-secondary" label="EDITAR" onClick={() => setIsEditing(true)} icon={<FaRegEdit />} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPostCard;
