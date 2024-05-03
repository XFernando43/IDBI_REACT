import React from "react";
import { useCommentStore } from "../../stores/commentStore";
import { ListGroup } from "react-bootstrap";
import { useParams } from "wouter";

export default function CommentList(){
    const comments = useCommentStore((state) => state.commentsResponse);
    const fetchComments = useCommentStore((state) => state.getCommentListByIncident);

    const { id } = useParams();


  React.useEffect(() => {
    if(id){
        fetchComments(id);
    }
  }, []);

  return (
    <div>
      <h2>Comentarios</h2>
      <ListGroup>
        {comments.map((comment, index) => (
          <ListGroup.Item key={index}>
            <p><strong>Autor:</strong> {comment.content}</p>
            <p><strong>Contenido:</strong> {comment.incidentID}</p>
            {/* Agrega más detalles según la estructura de tu objeto de comentario */}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}