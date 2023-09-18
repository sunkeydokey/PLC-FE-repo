import ReactApexChart from 'react-apexcharts';

export const ProgressBar = () => {
  return (
    <ReactApexChart
      type='radialBar'
      height={'110%'}
      options={{
        colors: ['#fef9c3'],
        chart: {
          animations: {
            enabled: true,
            easing: 'easeout',
            speed: 8000,
          },
        },
        plotOptions: {
          radialBar: {
            track: {
              dropShadow: {
                enabled: true,
                blur: 4,
                opacity: 0.15,
              },
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                show: false,
              },
            },
          },
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'vertical',
            gradientToColors: ['#87D4F9'],
            stops: [0, 100],
          },
        },
        stroke: {
          lineCap: 'round',
        },
      }}
      series={[90]}
    />
  );
};
