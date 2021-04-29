import faker from 'faker';
import _ from 'lodash';

export interface Person {
  name: string,
  mentor: string,
  class: string,
  major: string
  personality: {
    OTE: boolean
    CON: boolean
    EXT: boolean
    AGR: boolean
    NEU: boolean
  }
}

const randomChoice = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];
const classes = ['freshman', 'sophomore', 'junior', 'senior'];
const mentors = new Array(6).fill(null).map(s => faker.name.findName())
const majors = [
  'Nursing', 
  'Culinary Arts', 
  'Computer Science', 
  'Business Administration', 
  'Accounting', 
  'Physical Therapy', 
  'Medical Assisting', 
  'Mathematics and Statistics',
  'Information Science',
  'Finance'
];

export default function getPeople(): Person[] {
  return new Array(_.random(5,50)).fill(null).map(s => {
    return {
      name: faker.name.findName(),
      mentor: randomChoice(mentors),
      class: randomChoice(classes),
      major: randomChoice(majors),
      personality: {
        OTE: randomChoice([true, false]),
        CON: randomChoice([true, false]),
        EXT: randomChoice([true, false]),
        AGR: randomChoice([true, false]),
        NEU: randomChoice([true, false])
      }
    }
  })
}