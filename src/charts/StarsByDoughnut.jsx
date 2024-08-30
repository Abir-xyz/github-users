import React from 'react';
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFusioncharts from 'react-fusioncharts';

// Resolves charts dependancy
charts(FusionCharts);

const ChartComponent = ({ data }) => {
  const dataSource = {
    chart: {
      caption: 'Stars Per Language',
      showToolTip: 0,
      bgColor: '#1c1c21',
      bgAlpha: '50',
      decimals: 0,
      pieRadius: '50%',
      doughnutRadius: '60%',
      showPercentValues: 0,
      captionFontColor: '#FFFFFF',
      captionFontBold: 0,
      captionFontSize: 18,
      captionFont: 'Poppins',
      baseFont: 'Poppins',
      baseFontSize: 13,
      baseFontColor: '#979797',
      smartLineColor: '#617d98',
      showShadow: 0,
      showPlotBorder: 0,
      paletteColors: '#8BC1F7, #519DE9 , #06C, #004B95, #002F5D',
      use3DLighting: 0,
      useDataPlotColorForLabels: 0,
      showBorder: 0,
    },
    data,
  };
  return (
    <ReactFusioncharts
      type='doughnut2d'
      height='400'
      width='100%'
      dataFormat='JSON'
      dataSource={dataSource}
    />
  );
};

export default ChartComponent;
