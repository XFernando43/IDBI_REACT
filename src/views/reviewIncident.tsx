import CommentList from "../components/comments/commentsList";
import CardReview from "../components/reviews/CardReviw";


export default function ReviewIncidentView() {
    
    return (
        <div className="p-4 ">
            <CardReview/>
            <CommentList/>
        </div>
    );
}
