import { useEffect } from "react";
import useForm from "../../hooks/useForm";
import Input from "../Input/Input";
import './styles.css';
import Button from "../Button/Button";
import useFetch from "../../hooks/useFetch";
import { CREATE_POST } from "../../api";  // Importa a função CREATE_POST
import MainTitle from "../MainTitle/MainTItle";

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

const CreatePostModal = ({ showModal, setShowModal }) => {

  const { data, error, loading, request } = useFetch();

  const title = useForm();
  const description = useForm();
  const link = useForm();
  const category = useForm();

  useEffect(() => {
    const body = document.querySelector("body");

    if(showModal) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }, [showModal]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const postData = {
      title: title.value,
      description: description.value,
      link: link.value,
      category: category.value,
    };

    const token = localStorage.getItem("token");

    const { url, options } = CREATE_POST(postData, token);
    await request(url, options);
    setShowModal(false);
  };

  return (
    <div className="modal-backdrop" style={{ display: `${showModal ? "flex" : "none"}` }}>
      <div className="modal-content">
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "32px" }}>
          <MainTitle content="Criar Publicação" />
        </div>
        <form onSubmit={handleSubmit}>
          <Input label="Título" type="text" name="title" {...title} />
          <Input label="Conteúdo" type="text" name="description" {...description} isTextarea={true} />
          <Input label="Link" type="text" name="link" {...link} />
          
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select id="category" name="category" className="input" {...category}>
              <option value="">Select a category</option>
              {techCategories.map((tech, index) => (
                <option key={index} value={tech}>{tech}</option>
              ))}
            </select>
          </div>
          
          <div style={{ display: "flex", alignItems: "center", gap: "12px", justifyContent: "flex-end" }}>
            <Button className="btn-secondary" label="CANCELAR" loading={loading} onClick={() => setShowModal(false)} type="button" />
            <Button className="btn-primary" label="PUBLICAR" loading={loading} />
          </div>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default CreatePostModal;
