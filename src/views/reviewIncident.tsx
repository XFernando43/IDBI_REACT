import CommentList from "../components/comments/commentsList.component";
import CardReview from "../components/reviews/CardReviw.component";


export default function ReviewIncidentView() {
    
    return (
        <div className="p-4">
            <CardReview/>
            <CommentList/>
        </div>
    );
}
