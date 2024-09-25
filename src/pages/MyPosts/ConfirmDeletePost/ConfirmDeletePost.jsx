import { DELETE_POST } from "../../../api";
import Button from "../../../components/Button/Button";
import MainTitle from "../../../components/MainTitle/MainTItle";
import useFetch from "../../../hooks/useFetch";

const ConfirmDeletePost = ({ post_id, showModal, setShowModal, refresh }) => {
  const { data, error, loading, request } = useFetch();

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");
    const { url, options } = DELETE_POST(post_id, token);
    await request(url, options);
    setShowModal(false);
    refresh();
  };

  return (
    <div
      className="modal-backdrop"
      style={{ display: `${showModal ? "flex" : "none"}` }}
    >
      <div className="modal-content">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "32px",
          }}
        >
          <MainTitle content="Tem certeza?" />
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
        <Button
          className="btn-secondary"
          label="CANCELAR"
          loading={loading}
          onClick={() => setShowModal(false)}
          type="button"
        />
        <Button
          className="btn-primary"
          label="CONFIRMAR"
          loading={loading}
          onClick={handleSubmit}
        />
        </div>
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default ConfirmDeletePost;
