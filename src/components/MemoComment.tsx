import { FC } from 'react';

type PropType = {
  comment: string;
};

const MemoComment: FC<PropType> = ({ comment }) => (
  <div className="memoComment">
    <p>{comment}</p>
  </div>
);

export default MemoComment;
