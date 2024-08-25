import React from 'react';
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFusioncharts from 'react-fusioncharts';

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: 'Android Distribution for our app',
    subcaption: 'For all users in 2023',
    showpercentvalues: '1',
    defaultcenterlabel: 'Android Distribution',
    aligncaptionwithcanvas: '0',
    captionpadding: '0',
    decimals: '1',
    plottooltext:
      '<b>$percentValue</b> of our Android users are on <b>$label</b>',
    centerlabel: '# Users: $value',
    theme: 'candy',
  },
  data: [
    {
      label: 'Ice Cream Sandwich',
      value: '1067550000',
    },
    {
      label: 'Jelly Bean',
      value: '572550000',
    },
    {
      label: 'Kitkat',
      value: '544500000',
    },
    {
      label: 'Lollipop',
      value: '290760000',
    },
    {
      label: 'Marshmallow',
      value: '197670000',
    },
  ],
};

class MyComponent extends React.Component {
  render() {
    return (
      <ReactFusioncharts
        type='doughnut2d'
        dataFormat='JSON'
        dataSource={dataSource}
      />
    );
  }
}

export default MyComponent;
