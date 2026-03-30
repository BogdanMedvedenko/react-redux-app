import { useAppDispatch, useAppSelector } from "store/hooks";
import { feedbackActions } from "store/redux/feedbackSlice/feedbackSlice";

import Button from "components/Button/Button";
import "./styles.css";

function Feedback() {
  const dispatch = useAppDispatch();

  const like = useAppSelector((state) => state.feedback.like);
  const dislike = useAppSelector((state) => state.feedback.dislike);

  return (
    <div className="feedback-wrapper">
      <div>
        <Button name="Like" onClick={() => dispatch(feedbackActions.addLike())} />
        <p>{like}</p>
      </div>

      <div>
        <Button name="Dislike" onClick={() => dispatch(feedbackActions.addDislike())} />
        <p>{dislike}</p>
      </div>

      <Button
        name="Reset Results"
        onClick={() => dispatch(feedbackActions.resetResults())}
      />
    </div>
  );
}

export default Feedback;