import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface State {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
    }[];
  };
  options: {
    responsive: boolean;
    plugins: {
      legend: {
        position: 'top';
      };
      title: {
        display: boolean;
        text: string;
      };
    };
  };
}

class LineChart extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Dataset 2',
            data: [],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
      },
    };
  }

  componentDidMount() {
    const { labels } = this.state.data;
    const newData = {
      ...this.state.data,
      datasets: this.state.data.datasets.map((dataset) => ({
        ...dataset,
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      })),
    };

    this.setState({ data: newData });
  }

  render() {
    return <Line options={this.state.options} data={this.state.data} />;
  }
}

export default LineChart;
