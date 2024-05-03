import CommentList from "../components/comments/commentsList.component";
import CardReview from "../components/reviews/CardReviw.component";


export default function ReviewIncidentView() {
    
    return (
        <div className=" grid grid-rows-2 justify-center items-center">
            <CardReview/>
            <CommentList/>
        </div>
    );
}
