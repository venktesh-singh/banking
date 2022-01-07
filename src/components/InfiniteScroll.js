import React, { useState } from "react";
import ReactDOM from "react-dom";
import InfiniteLoading from "react-simple-infinite-loading";

export const AccountList = () => {

    const [items, setItems] = useState([...Array(100)].map((_, index) => index));

    const loadMoreItems = () => {
      const newItems = [...Array(100)].map((_, index) => items.length + index);
  
      return new Promise(resolve => {
        setTimeout(() => {
          setItems([...items, ...newItems]);
          resolve();
        }, 300);
      });
    };
  
    return (
      <div className="App">
        <h1>React simple infinite loading example</h1>
  
        <h2>Start scrolling here :</h2>
  
        <InfiniteLoading
          hasMoreItems
          itemHeight={40}
          loadMoreItems={loadMoreItems}
        >
          {items.map(item => (
            <div className="item" key={item}>
              {item}
            </div>
          ))}
        </InfiniteLoading>
      </div>
    );
};    
