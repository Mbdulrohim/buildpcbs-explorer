
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const PCBVisual: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = 1200;
    const height = 800;
    
    // Clear previous SVG
    d3.select(containerRef.current).select('svg').remove();

    const svg = d3.select(containerRef.current)
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('preserveAspectRatio', 'xMidYMid slice')
      .style('position', 'absolute')
      .style('top', '0')
      .style('left', '0')
      .style('opacity', '0.2')
      .style('pointer-events', 'none');

    // Create a grid of points
    const spacing = 40;
    const dots: { x: number, y: number }[] = [];
    for (let x = 0; x < width; x += spacing) {
      for (let y = 0; y < height; y += spacing) {
        dots.push({ x, y });
      }
    }

    // Draw grid dots
    svg.selectAll('.dot')
      .data(dots)
      .enter()
      .append('circle')
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
      .attr('r', 1)
      .attr('fill', '#3b82f6');

    // Create random traces
    const traceCount = 20;
    for (let i = 0; i < traceCount; i++) {
      const startX = Math.floor(Math.random() * (width / spacing)) * spacing;
      const startY = Math.floor(Math.random() * (height / spacing)) * spacing;
      const segments = 4 + Math.floor(Math.random() * 6);
      let currentX = startX;
      let currentY = startY;
      const points: [number, number][] = [[currentX, currentY]];

      for (let j = 0; j < segments; j++) {
        const direction = Math.random();
        if (direction < 0.25) currentX += spacing;
        else if (direction < 0.5) currentX -= spacing;
        else if (direction < 0.75) currentY += spacing;
        else currentY -= spacing;
        points.push([currentX, currentY]);
      }

      const lineGenerator = d3.line().curve(d3.curveStepBefore);
      
      const path = svg.append('path')
        .attr('d', lineGenerator(points))
        .attr('fill', 'none')
        .attr('stroke', '#3b82f6')
        .attr('stroke-width', 1.5)
        .attr('stroke-opacity', 0.6)
        .attr('stroke-dasharray', '1000');

      const totalLength = (path.node() as SVGPathElement).getTotalLength();
      
      path
        .attr('stroke-dashoffset', totalLength)
        .transition()
        .duration(4000 + Math.random() * 4000)
        .delay(Math.random() * 2000)
        .ease(d3.easeLinear)
        .attr('stroke-dashoffset', 0)
        .on('end', function repeat() {
          d3.select(this)
            .attr('stroke-dashoffset', totalLength)
            .transition()
            .duration(4000 + Math.random() * 4000)
            .ease(d3.easeLinear)
            .attr('stroke-dashoffset', 0)
            .on('end', repeat);
        });

      // Add pads at start/end
      svg.append('circle')
        .attr('cx', startX)
        .attr('cy', startY)
        .attr('r', 3)
        .attr('fill', 'none')
        .attr('stroke', '#3b82f6')
        .attr('stroke-width', 1);
    }
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none" />
  );
};

export default PCBVisual;
