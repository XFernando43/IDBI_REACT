import React, { useEffect } from "react";
import { useCommentStore } from "../../stores/commentStore";
import { ListGroup } from "react-bootstrap";
import { useParams } from "wouter";

export default function CommentList() {
  const comments = useCommentStore((state) => state.commentsResponse);
  const fetchComments = useCommentStore((state) => state.getCommentListByIncident);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchComments(id);
    }
  }, []);

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4 font-bold text-primary">Comentarios</h2>
      {comments.length === 0 ? (
        <p className="text-center font-bold">No hay comentarios por el momento.</p>
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
