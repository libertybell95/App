import * as React from 'react';
import { Bar } from 'react-chartjs-2';
import { Person } from '../services/data';

export interface PersonalityProps {
  menteeData: Person[]
}
 
export interface PersonalityState {
  
}

/**
 * Its messy, and it's not scalable. I know. I'll work on it later (TM)
 */
class Personality extends React.Component<PersonalityProps, PersonalityState> {
  state = {
    data: {
      labels: [
        'Openness To Expirence',
        'Conscientiousness',
        'Extraversion',
        'Agreeableness',
        'Neuroticism'
      ],
      datasets: [{
        label: 'Big Five Personalities',
        data: [
          this.props.menteeData.filter(d => d.personality.OTE).length,
          this.props.menteeData.filter(d => d.personality.CON).length,
          this.props.menteeData.filter(d => d.personality.EXT).length,
          this.props.menteeData.filter(d => d.personality.AGR).length,
          this.props.menteeData.filter(d => d.personality.NEU).length
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    }
  }
  
  render() { 
    return (
      <>
        <Bar data={this.state.data} options={this.state.options}/>
      </>
    );
  }
}
 
export default Personality;