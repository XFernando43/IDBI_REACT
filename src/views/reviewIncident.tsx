import CommentList from "../components/comments/commentsList.component";
import CardReview from "../components/reviews/CardReviw.component";


export default function ReviewIncidentView() {
    
    return (
        <div className=" grid grid-cols-2 gap-2">
            <CardReview/>
            <CommentList/>
        </div>
    );
}
