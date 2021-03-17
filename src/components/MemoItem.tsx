import { FC } from 'react';
import MemoComment from './MemoComment';

export type CommentType = {
  content: string;
};

type PropType = {
  comments?: CommentType[];
};

const MemoItem: FC<PropType> = ({ comments }) => (
  <div className="memoItem">
    {/* <div className="memoItem__header">
      <p>hir0o commented 7 hours ago</p>
    </div> */}
    <div className="memoItem__content">
      <p>テキストが入ってる感じ</p>
      {comments &&
        comments.map((comment) => <MemoComment comment={comment.content} />)}
    </div>
  </div>
);

export default MemoItem;
