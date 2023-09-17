import ReactApexChart from 'react-apexcharts';

export const ProgressBar = () => {
  return (
    <ReactApexChart
      type='radialBar'
      height={'auto'}
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
            hollow: {
              margin: 0,
              size: '70%',
              background: '#525252',
            },
            track: {
              dropShadow: {
                enabled: true,
                top: 2,
                left: 0,
                blur: 4,
                opacity: 0.15,
              },
            },
            dataLabels: {
              name: {
                offsetY: 10,
                color: '#fff',
                fontSize: '30px',
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
        labels: ['Loading...'],
      }}
      series={[90]}
    />
  );
};
