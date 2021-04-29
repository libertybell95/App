import * as React from 'react';
import { Doughnut } from 'react-chartjs-2'
import { Person } from '../services/data'

export interface ClassYearProps {
  menteeData: Person[]
}
 
export interface ClassYearState {
  
}
 
class ClassYear extends React.Component<ClassYearProps, ClassYearState> {
  state = {
    data: {
      labels: [
        'Freshman',
        'Sophomore',
        'Junior',
        'Senior'
      ],
      datasets: [{
        label: 'ClassYear',
        data: [
          this.getCount('freshman'), 
          this.getCount('sophomore'), 
          this.getCount('junior'),  
          this.getCount('senior'), 
        ],
        backgroundColor: [
          'rgb(255, 0, 0)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(0, 0, 0)'
        ],
        hoverOffset: 4
      }]
    }
  }

  getCount(val: string) {
    let count = 0;
    this.props.menteeData.forEach(d => {
      if (d.class === val) count++;
    })
    return count;
  }

  render() { 
    return (
      <>
        <Doughnut data={this.state.data}/>
      </>
    );
  }
}
 
export default ClassYear;