import { extent, line } from 'd3';
import { scaleLinear } from 'd3-scale';
import { useMemo } from 'react';

type PlotProps = {
  data: number[];
  width: number;
  height: number;
  marginTop: number;
  marginRight: number;
  marginBottom: number;
  marginLeft: number;
};

export default function LinePlot({
  data = [1, 23, 113, 323, 2, 323, 23, 2, 312, 412, 32, 321, 4, 124, 21],
  width = 400,
  height = 200,
  marginTop = 50,
  marginRight = 50,
  marginBottom = 50,
  marginLeft = 50,
}: PlotProps) {
  const xTicks = useMemo(() => {
    const xScale = scaleLinear()
      .domain([0, data.length - 1])
      .range([0 + marginLeft, width - marginRight]);

    return xScale.ticks().map((value) => ({
      value,
      xOffset: xScale(value),
    }));
  }, [data.length, marginLeft, marginRight, width]);

  const yTicks = useMemo(() => {
    const extented = extent(data) as [number, number];
    const yScale = scaleLinear()
      .domain(extented)
      .range([height - marginBottom, marginTop]);

    return yScale.ticks().map((value) => ({
      value,
      yOffset: yScale(value),
    }));
  }, [data, marginTop, marginBottom, height]);

  if (!data.length || !data) {
    return <svg className='w-full h-full'></svg>;
  }

  const extented = extent(data) as [number, number];
  const x = scaleLinear(
    [0, data.length - 1],
    [0 + marginLeft, width - marginRight],
  );

  const y = scaleLinear(extented, [height - marginBottom, marginTop]);
  const lineMaker = line((_d, i) => x(i), y);
  const d = lineMaker(data) as string | undefined;

  return (
    <div className='w-full h-full overflow-x-scroll'>
      <svg width={width} height={height}>
        <path fill='none' stroke='white' strokeWidth='2' d={d} />
        <g fill='black' stroke='white' strokeWidth='3'>
          {data.map((d, i) => (
            <circle key={i} cx={x(i)} cy={y(d)} r='2' />
          ))}
        </g>
        {yTicks.map(({ value, yOffset }) => (
          <g key={value} transform={`translate(40, ${yOffset})`}>
            <line x2='4' stroke='white' />
            <text
              key={value}
              stroke='white'
              style={{
                fontSize: '12px',
                textAnchor: 'end',
                transform: 'translateX(-10px)',
              }}>
              {value}
            </text>
          </g>
        ))}
        {xTicks.map(({ value, xOffset }) => (
          <g key={value} transform={`translate(${xOffset}, 155)`}>
            <line y2='4' stroke='white' />
            <text
              key={value}
              stroke='white'
              style={{
                fontSize: '12px',
                textAnchor: 'middle',
                transform: 'translateY(20px)',
              }}>
              {value}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
