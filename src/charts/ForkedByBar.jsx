import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFusioncharts from 'react-fusioncharts';
import React from 'react';

// Resolves charts dependancy
charts(FusionCharts);

const ChartComponent = ({ data }) => {
  const dataSource = {
    chart: {
      caption: 'Most Forked',
      bgColor: '#1c1c21',
      bgAlpha: '50',
      yAxisName: 'Forks',
      xAxisName: 'Repos',
      xAxisNameFontSize: 16,
      yAxisNameFontSize: 16,
      xAxisNameFontBold: 0,
      yAxisNameFontBold: 0,
      showCanvasBorder: 0,
      showAlternateVGridColor: 0,
      usePlotGradientColor: 0,
      valueFontSize: 16,
      placeValuesInside: 0,
      divLineColor: '#6d6d6d',
      divLineAlpha: 15,
      captionFontColor: '#FFFFFF',
      captionFontBold: 0,
      captionFontSize: 18,
      captionFont: 'Poppins',
      baseFont: 'Poppins',
      baseFontSize: 12,
      baseFontColor: '#818181',
      smartLineColor: '#808080',
      showShadow: 0,
      showPlotBorder: 0,
      paletteColors: '#8BC1F7, #519DE9 , #06C, #004B95, #002F5D',
      showBorder: 0,
      YAxisNamePadding: '20',
      showToolTip: '0',
      canvasbgColor: '#1e1a22',
      canvasbgAlpha: '50',
    },
    data,
  };
  return (
    <ReactFusioncharts
      type='bar2d'
      height='400'
      width='100%'
      dataFormat='JSON'
      dataSource={dataSource}
    />
  );
};

export default ChartComponent;
