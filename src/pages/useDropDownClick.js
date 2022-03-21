import { useState, useEffect } from "react";

/* 블로그 코드 참조 */

export const UseDropDownClick = (refValue, boolState) => {
  const [active, active_ch] = useState(boolState);

  useEffect(() => {
    const onClick = (e) => {
      if (refValue.current !== null && !refValue.current.contains(e.target)) {
        active_ch(!active);
      }
    };

    if (active) {
      window.addEventListener("click", onClick);
    }

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [active, refValue]);

  return [active, active_ch];
};