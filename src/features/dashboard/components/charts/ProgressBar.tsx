import ReactApexChart from 'react-apexcharts';

export const ProgressBar = () => {
  return (
    <div className='h-full'>
      <ReactApexChart
        type='radialBar'
        height={'280px'}
        options={{
          plotOptions: {
            radialBar: {
              dataLabels: {
                total: {
                  show: true,
                  label: 'Loading...',
                  color: 'white',
                },
              },
            },
          },
          stroke: {
            lineCap: 'round',
          },
        }}
        series={[99]}
      />
    </div>
  );
};
