import React from 'react';

const SavedMemories = ({posts}) => {
    return (
        <>   
            <div>
                {posts.map((memories, key) => (
                    <h1>{memories.postTitle}</h1>
                ))};
            </div>         
        </>
    ) 
};
  
export default SavedMemories;
