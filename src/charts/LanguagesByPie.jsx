import React, { useReducer } from 'react';
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFusioncharts from 'react-fusioncharts';

// Resolves charts dependancy
charts(FusionCharts);

const ChartComponent = ({ data }) => {
  const dataSource = {
    chart: {
      caption: 'Languages',
      bgColor: '#121113',
      bgAlpha: '99',
      captionFontSize: 18,
      captionFont: 'Poppins',
      captionFontColor: '#FFFFFF',
      captionFontBold: 0,
      showBorder: 0,
      pieRadius: '50%',
      baseFont: 'Poppins',
      baseFontSize: 13,
      baseFontColor: '#979797',
      paletteColors: '#8BC1F7, #519DE9 , #06C, #004B95, #002F5D',
      showShadow: 0,
      showPlotBorder: 0,
      use3DLighting: 0,
      useDataPlotColorForLabels: 0,
    },
    data,
  };
  return (
    <ReactFusioncharts
      type='pie2d'
      height='400'
      width='100%'
      dataFormat='JSON'
      dataSource={dataSource}
    />
  );
};

export default ChartComponent;
