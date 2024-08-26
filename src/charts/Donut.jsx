import React from 'react';
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFusioncharts from 'react-fusioncharts';

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: 'Languages',
    captionFontSize: 21,
    captionFont: 'Open Sans',
    captionFontColor: '#000000',
    captionFontBold: 0,
    showBorder: 0,
    bgColor: '#fffffff',
    pieRadius: '50%',
    baseFont: 'Open Sans',
    baseFontSize: 13,
    baseFontColor: '#979797',
    paletteColors: '#8BC1F7, #519DE9 , #06C, #004B95, #002F5D',
    showShadow: 0,
    showPlotBorder: 0,
    use3DLighting: 0,
    useDataPlotColorForLabels: 0,
  },
  data: [
    {
      label: 'Apache',
      value: '32647479',
    },
    {
      label: 'Microsoft',
      value: '22100932',
    },
    {
      label: 'Zeus',
      value: '14376',
    },
    {
      label: 'Other',
      value: '18674221',
    },
  ],
};

class MyComponent extends React.Component {
  render() {
    return (
      <ReactFusioncharts
        type='pie2d'
        height='400'
        width='100%'
        dataFormat='JSON'
        dataSource={dataSource}
      />
    );
  }
}

export default MyComponent;
