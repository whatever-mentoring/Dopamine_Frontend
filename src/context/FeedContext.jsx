import { createContext, useState } from 'react';

export const FeedContext = createContext({
  feedSortOpt: '최신순',
  setFeedSortOpt: () => {},
});

const FeedProvider = ({ children }) => {
  const [feedSortOpt, setFeedSortOpt] = useState('최신순');

  return (
    <FeedContext.Provider
      value={{
        feedSortOpt,
        setFeedSortOpt,
      }}
    >
      {children}
    </FeedContext.Provider>
  );
};

export default FeedProvider;
