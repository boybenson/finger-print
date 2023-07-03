import React, { useRef, useEffect, useState } from "react";

const Canvas = (props: any) => {
  const canvasRef = useRef(null);
  const [hash, setHash] = useState<number>(0);

  useEffect(() => {
    const canvas: any = canvasRef.current;
    const ctx = canvas.getContext("2d");

    //Our first draw
    ctx.fillStyle = "rgb(255,0,255)";
    ctx.beginPath();
    ctx.rect(20, 20, 150, 100);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = "rgb(0,255,255)";
    ctx.arc(50, 50, 50, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    // txt = "abz190#$%ˆ@£éú";
    ctx.textBaseline = "top";
    ctx.font = "17px “Arial 17”";
    ctx.textBaseline = "alphabetic";
    ctx.fillStyle = "rgb(255,5,5)";
    ctx.rotate(0.03);
    ctx.fillText("abz190#$%ˆ@£éú", 4, 17);

    const calculateHash = () => {
      const src = canvas.toDataURL();

      let hash = 0;
      for (let i = 0; i < src.length; i++) {
        const char = src.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash;
      }
      //outpu
      setHash(hash);
    };

    calculateHash();
  }, []);

  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-bold">Hash --- {hash}</h1>
      <canvas ref={canvasRef} {...props} />;
    </div>
  );
};

export default Canvas;
