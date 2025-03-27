import React from 'react';

const MemoComp = ({name})=>{
    console.log("React Memo component rendering......")
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default React.memo(MemoComp)

