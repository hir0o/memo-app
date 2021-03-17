import { FC } from 'react';
import MemoItem, { CommentType } from './components/MemoItem';
import MemoInput from './components/MemoInput';
import Header from './components/Header';

const App: FC = () => {
  const comments1: CommentType[] = [
    {
      content: 'コメント1',
    },
    {
      content: 'コメント2',
    },
    {
      content: 'コメント3',
    },
  ];
  const comments2: CommentType[] = [
    {
      content: 'コメント1',
    },
  ];

  return (
    <>
      <Header />
      <div className="container">
        <div className="memos">
          <MemoItem />
          <MemoItem comments={comments1} />
          <MemoItem />
          <MemoItem comments={comments2} />
        </div>
        <MemoInput />
      </div>
    </>
  );
};
export default App;
