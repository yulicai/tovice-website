import React, { useRef, useEffect } from 'react';

const ZenWaterCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resize();
    let width = canvas.width;
    let height = canvas.height;
    let mouse = { x: width / 2, y: height / 2 };
    let center = { x: width / 2, y: height / 2 };
    const easing = 0.12;
    let t = 0;

    function draw() {
      ctx.clearRect(0, 0, width, height);
      // 缓动中心
      center.x += (mouse.x - center.x) * easing;
      center.y += (mouse.y - center.y) * easing;
      // Draw concentric sine waves
      for (let r = 0; r < 6; r++) {
        let radius = 60 + r * 30 + Math.sin(t / 40 + r) * 8;
        ctx.beginPath();
        ctx.arc(center.x, center.y, radius, 0, 2 * Math.PI);
        ctx.strokeStyle = `rgba(255,255,255,${0.18 + 0.09 * Math.cos(t / 60 + r)})`;
        ctx.lineWidth = 6.4 + Math.sin(t / 30 + r) * 1.4;
        ctx.stroke();
      }
      t++;
      requestAnimationFrame(draw);
    }

    draw();

    function onMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }
    canvas.addEventListener('mousemove', onMove);

    function onLeave() {
      mouse.x = width / 2;
      mouse.y = height / 2;
    }
    canvas.addEventListener('mouseleave', onLeave);

    window.addEventListener('resize', () => {
      resize();
      width = canvas.width;
      height = canvas.height;
    });
    return () => {
      canvas.removeEventListener('mousemove', onMove);
      canvas.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'auto',
        display: 'block',
        background: 'transparent'
      }}
    />
  );
};

export default ZenWaterCanvas; 