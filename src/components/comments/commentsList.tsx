import { useEffect, useState } from "react";
import { useCommentStore } from "../../stores/commentStore";
import { ListGroup, Form, Button } from "react-bootstrap";
import { useParams } from "wouter";

export default function CommentList() {
  const [newComment, setNewComment] = useState("");
  const postComment = useCommentStore((state) => state.PostComment);
  const comments = useCommentStore((state) => state.commentsResponse);
  const fetchComments = useCommentStore(
    (state) => state.getCommentListByIncident
  );
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      fetchComments(id);
    }
  }, []);

  function submitComment(){
    const userId = localStorage.getItem('userId');
    if(id && userId){
      postComment(newComment, parseInt(id), parseInt(userId));
    }
  }

  return (
    <div className="container py-4 overflow-y-auto max-h-[450px] bg-slate-200 rounded-md shadow-2xl mt-4">
      <div className=" flex flex-col gap-2 ">
        <h2 className="text-center mb-4 font-bold text-primary">Comentarios</h2>
        <Form.Group>
          <Form.Control
            as="textarea"
            rows={3}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Escribe tu comentario aquí..."
          />
        </Form.Group>
        <Button
          variant="primary mb-3"
          onClick={submitComment}
        >
          Enviar comentario
        </Button>
      </div>

      <hr />

      {comments.length === 0 ? (
        <p className="text-center font-bold">
          No hay comentarios por el momento.
        </p>
      ) : (
        <ListGroup>
          {comments.map((comment, index) => (
            <ListGroup.Item key={index} className="mb-3">
              <div className="mb-2">
                <h4 className="font-bold">Autor:</h4>
                <p>{comment.user.name}</p>
              </div>
              <div>
                <h4 className="font-bold">Contenido:</h4>
                <p>{comment.content}</p>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
  );
}
