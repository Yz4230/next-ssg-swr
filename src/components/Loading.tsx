import { useEffect, useState } from "react";

const Loading = () => {
  const [elipsis, setElipsis] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setElipsis((elipsis) => (elipsis + 1) % 4);
    }, 100);
    return () => clearInterval(interval);
  });

  return (
    <div>
      Loading
      {Array(elipsis).fill(".").join("")}
    </div>
  );
};

export default Loading;
