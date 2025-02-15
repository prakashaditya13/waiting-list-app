import React from "react";

const Divider = ({color, width, verticalGap, horizontalGap}) => {
  return <div className={`__divider ${verticalGap} ${horizontalGap}`}>
    <hr className={`border-[${color}]/50 border-${width}`} />
  </div>;
};

export default Divider;
