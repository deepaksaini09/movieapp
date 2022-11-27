import React, {memo} from "react";
function MemoFun({fu,count}) {
    console.log('child component');
    return (
        <div>
            <h1>this is child component:{count} </h1>
        </div>
    )
}
export default memo(MemoFun);