import React from 'react';
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFusioncharts from 'react-fusioncharts';

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: 'Most Popular',
    yAxisName: 'Stars',
    xAxisName: 'Repos',
    xAxisNameFontSize: 16,
    yAxisNameFontSize: 16,
    xAxisNameFontBold: 0,
    yAxisNameFontBold: 0,
    showCanvasBorder: 0,
    showAlternateHGridColor: 0,
    usePlotGradientColor: 0,
    showAlternateVGridColor: 0,
    valueFontSize: 16,
    placeValuesInside: 0,
    divLineColor: '#6d6d6d',
    divLineAlpha: 15,
    captionFontColor: '#000000',
    captionFontBold: 0,
    captionFontSize: 21,
    captionFont: 'Open Sans',
    baseFont: 'Open Sans',
    baseFontSize: 12,
    baseFontColor: '#818181',
    smartLineColor: '#808080',
    showShadow: 0,
    showPlotBorder: 0,
    paletteColors: '#8BC1F7, #519DE9 , #06C, #004B95, #002F5D',
    bgColor: '#FFFFFF',
    showBorder: 0,
  },
  data: [
    {
      label: 'Venezuela',
      value: '303.8',
    },
    {
      label: 'Saudi',
      value: '297.5',
    },
    {
      label: 'Canada',
      value: '168.1',
    },
    {
      label: 'Iran',
      value: '157.8',
    },
    {
      label: 'Iraq',
      value: '145.0',
    },
    {
      label: 'Russia',
      value: '107.8',
    },
    {
      label: 'Kuwait',
      value: '101.5',
    },
    {
      label: 'UAE',
      value: '97.8',
    },
    {
      label: 'US',
      value: '68.8',
    },
    {
      label: 'Libya',
      value: '48.4',
    },
  ],
};

class MyComponent extends React.Component {
  render() {
    return (
      <ReactFusioncharts
        type='column2d'
        width='100%'
        height='400'
        dataFormat='JSON'
        dataSource={dataSource}
      />
    );
  }
}

export default MyComponent;
