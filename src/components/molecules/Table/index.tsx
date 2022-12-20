/* eslint-disable no-nested-ternary */
import React, { FC, useState } from 'react';

import { faker } from '@faker-js/faker';

import { useAppSelector } from '../../../utils/hooks';
import { TableHeader, TableRow } from '../../atoms';

// import style from './index.module.css';
const bloodGroup = [
  'A+',
  'A-',
  'B+',
  'B-',
  'AB+',
  'AB-',
  'O+',
  'O-',
];
// an array of genotypes
const genotype = [
  'AA',
  'AS',
  'SS',
  'AC',
  'CC',
  'SC',
  'AO',
  'OO',
  'SO',
];

// list of 7 nigeria states
const states = [
  'Abia',
  'Adamawa',
  'Akwa Ibom',
  'Anambra',
  'Bauchi',
  'Bayelsa',
  'Benue',
];
// marital status
const maritalStatus = ['Single', 'Married', 'Divorced', 'Widowed'];
const gender = ['Male', 'Female'];
const choices = ['Yes', 'No'];
const getRandomValue = (array: string[]) => array[Math.floor(Math.random() * array.length)];

interface ITable {}
export interface FilteredQuery {
  orgName?: string[];
  userName?: string;
  email?: string;
  phoneNumber?: number;
  createdAt?: string;
  status?: string[];
}
const Table: FC<ITable> = () => {
  const search = useAppSelector((state) => state.app.search);
  // eslint-disable-next-line no-console
  console.log(search);
  const [rows] = useState<
    {
      id: number;
      data: {
        value: string;
        level: number;
        data: string | number;
      }[];
    }[]
  >([
    {
      id: 1,
      data: [
        {
          value: 'uuid',
          level: 4,
          data: faker.datatype.uuid().split('-')[0],
        },
        {
          value: 'Age',
          level: 4,
          data: Math.floor(Math.random() * 60) + 20,
        },
        {
          value: 'Gender',
          level: 4,
          data: getRandomValue(gender),
        },
        {
          value: 'State of origin',
          level: 4,
          data: getRandomValue(states),
        },
        {
          value: 'Marital Status',
          level: 4,
          data: getRandomValue(maritalStatus),
        },
        {
          value: 'Genotype',
          level: 4,
          data: getRandomValue(genotype),
        },
        {
          value: 'Bloodgroup',
          level: 4,
          data: getRandomValue(bloodGroup),
        },
        {
          value: 'Display of Alogia',
          level: 4,
          data: getRandomValue(choices),
        },
        {
          value: 'Show of Apathy',
          level: 4,
          data: getRandomValue(choices),
        },
        {
          value: 'Third Person Auditory Hallucination',
          level: 1,
          data: getRandomValue(choices),
        },
        {
          value: 'Delusion of Control',
          level: 3,
          data: getRandomValue(choices),
        },
        {
          value: 'Thought Echo',
          level: 2,
          data: getRandomValue(choices),
        },
        {
          value: 'Insersion or Withdrawal',
          level: 2,
          data: getRandomValue(choices),
        },
      ],
    },
    {
      id: 2,
      data: [
        {
          value: 'uuid',
          level: 4,
          data: faker.datatype.uuid().split('-')[0],
        },
        {
          value: 'Age',
          level: 4,
          data: Math.floor(Math.random() * 60) + 20,
        },
        {
          value: 'Gender',
          level: 4,
          data: getRandomValue(gender),
        },
        {
          value: 'State of origin',
          level: 4,
          data: getRandomValue(states),
        },
        {
          value: 'Marital Status',
          level: 4,
          data: getRandomValue(maritalStatus),
        },
        {
          value: 'Genotype',
          level: 4,
          data: [getRandomValue(genotype), 'AO', 'BB', 'BO', 'OO', 'AB'][
            Math.floor(Math.random() * 6)
          ],
        },
        {
          value: 'Bloodgroup',
          level: 4,
          data: getRandomValue(bloodGroup),
        },
        {
          value: 'Display of Alogia',
          level: 4,
          data: getRandomValue(choices),
        },
        {
          value: 'Show of Apathy',
          level: 4,
          data: getRandomValue(choices),
        },
        {
          value: 'Third Person Auditory Hallucination',
          level: 1,
          data: getRandomValue(choices),
        },
        {
          value: 'Delusion of Control',
          level: 3,
          data: getRandomValue(choices),
        },
        {
          value: 'Thought Echo',
          level: 2,
          data: getRandomValue(choices),
        },
        {
          value: 'Insersion or Withdrawal',
          level: 2,
          data: getRandomValue(choices),
        },
      ],
    },
    {
      id: 3,
      data: [
        {
          value: 'uuid',
          level: 4,
          data: faker.datatype.uuid().split('-')[0],
        },
        {
          value: 'Age',
          level: 4,
          data: Math.floor(Math.random() * 60) + 20,
        },
        {
          value: 'Gender',
          level: 4,
          data: getRandomValue(gender),
        },
        {
          value: 'State of origin',
          level: 4,
          data: getRandomValue(states),
        },
        {
          value: 'Marital Status',
          level: 4,
          data: getRandomValue(maritalStatus),
        },
        {
          value: 'Genotype',
          level: 4,
          data: getRandomValue(genotype),
        },
        {
          value: 'Bloodgroup',
          level: 4,
          data: getRandomValue(bloodGroup),
        },
        {
          value: 'Display of Alogia',
          level: 4,
          data: getRandomValue(choices),
        },
        {
          value: 'Show of Apathy',
          level: 4,
          data: getRandomValue(choices),
        },
        {
          value: 'Third Person Auditory Hallucination',
          level: 1,
          data: getRandomValue(choices),
        },
        {
          value: 'Delusion of Control',
          level: 3,
          data: getRandomValue(choices),
        },
        {
          value: 'Thought Echo',
          level: 2,
          data: getRandomValue(choices),
        },
        {
          value: 'Insersion or Withdrawal',
          level: 2,
          data: getRandomValue(choices),
        },
      ],
    },
    {
      id: 4,
      data: [
        {
          value: 'uuid',
          level: 4,
          data: faker.datatype.uuid().split('-')[0],
        },
        {
          value: 'Age',
          level: 4,
          data: Math.floor(Math.random() * 60) + 20,
        },
        {
          value: 'Gender',
          level: 4,
          data: getRandomValue(gender),
        },
        {
          value: 'State of origin',
          level: 4,
          data: getRandomValue(states),
        },
        {
          value: 'Marital Status',
          level: 4,
          data: getRandomValue(maritalStatus),
        },
        {
          value: 'Genotype',
          level: 4,
          data: getRandomValue(genotype),
        },
        {
          value: 'Bloodgroup',
          level: 4,
          data: getRandomValue(bloodGroup),
        },
        {
          value: 'Display of Alogia',
          level: 4,
          data: getRandomValue(choices),
        },
        {
          value: 'Show of Apathy',
          level: 4,
          data: getRandomValue(choices),
        },
        {
          value: 'Third Person Auditory Hallucination',
          level: 1,
          data: getRandomValue(choices),
        },
        {
          value: 'Delusion of Control',
          level: 3,
          data: getRandomValue(choices),
        },
        {
          value: 'Thought Echo',
          level: 2,
          data: getRandomValue(choices),
        },
        {
          value: 'Insersion or Withdrawal',
          level: 2,
          data: getRandomValue(choices),
        },
      ],
    },
    {
      id: 5,
      data: [
        {
          value: 'uuid',
          level: 4,
          data: faker.datatype.uuid().split('-')[0],
        },
        {
          value: 'Age',
          level: 4,
          data: Math.floor(Math.random() * 60) + 20,
        },
        {
          value: 'Gender',
          level: 4,
          data: getRandomValue(gender),
        },
        {
          value: 'State of origin',
          level: 4,
          data: getRandomValue(states),
        },
        {
          value: 'Marital Status',
          level: 4,
          data: getRandomValue(maritalStatus),
        },
        {
          value: 'Genotype',
          level: 4,
          data: getRandomValue(genotype),
        },
        {
          value: 'Bloodgroup',
          level: 4,
          data: getRandomValue(bloodGroup),
        },
        {
          value: 'Display of Alogia',
          level: 4,
          data: getRandomValue(choices),
        },
        {
          value: 'Show of Apathy',
          level: 4,
          data: getRandomValue(choices),
        },
        {
          value: 'Third Person Auditory Hallucination',
          level: 1,
          data: getRandomValue(choices),
        },
        {
          value: 'Delusion of Control',
          level: 3,
          data: getRandomValue(choices),
        },
        {
          value: 'Thought Echo',
          level: 2,
          data: getRandomValue(choices),
        },
        {
          value: 'Insersion or Withdrawal',
          level: 2,
          data: getRandomValue(choices),
        },
      ],
    },
    {
      id: 6,
      data: [
        {
          value: 'uuid',
          level: 4,
          data: faker.datatype.uuid().split('-')[0],
        },
        {
          value: 'Age',
          level: 4,
          data: Math.floor(Math.random() * 60) + 20,
        },
        {
          value: 'Gender',
          level: 4,
          data: getRandomValue(gender),
        },
        {
          value: 'State of origin',
          level: 4,
          data: getRandomValue(states),
        },
        {
          value: 'Marital Status',
          level: 4,
          data: getRandomValue(maritalStatus),
        },
        {
          value: 'Genotype',
          level: 4,
          data: getRandomValue(genotype),
        },
        {
          value: 'Bloodgroup',
          level: 4,
          data: getRandomValue(bloodGroup),
        },
        {
          value: 'Display of Alogia',
          level: 4,
          data: getRandomValue(choices),
        },
        {
          value: 'Show of Apathy',
          level: 4,
          data: getRandomValue(choices),
        },
        {
          value: 'Third Person Auditory Hallucination',
          level: 1,
          data: getRandomValue(choices),
        },
        {
          value: 'Delusion of Control',
          level: 3,
          data: getRandomValue(choices),
        },
        {
          value: 'Thought Echo',
          level: 2,
          data: getRandomValue(choices),
        },
        {
          value: 'Insersion or Withdrawal',
          level: 2,
          data: getRandomValue(choices),
        },
      ],
    },
    {
      id: 7,
      data: [
        {
          value: 'uuid',
          level: 4,
          data: faker.datatype.uuid().split('-')[0],
        },
        {
          value: 'Age',
          level: 4,
          data: Math.floor(Math.random() * 60) + 20,
        },
        {
          value: 'Gender',
          level: 4,
          data: getRandomValue(gender),
        },
        {
          value: 'State of origin',
          level: 4,
          data: getRandomValue(states),
        },
        {
          value: 'Marital Status',
          level: 4,
          data: getRandomValue(maritalStatus),
        },
        {
          value: 'Genotype',
          level: 4,
          data: getRandomValue(genotype),
        },
        {
          value: 'Bloodgroup',
          level: 4,
          data: getRandomValue(bloodGroup),
        },
        {
          value: 'Display of Alogia',
          level: 4,
          data: getRandomValue(choices),
        },
        {
          value: 'Show of Apathy',
          level: 4,
          data: getRandomValue(choices),
        },
        {
          value: 'Third Person Auditory Hallucination',
          level: 1,
          data: getRandomValue(choices),
        },
        {
          value: 'Delusion of Control',
          level: 3,
          data: getRandomValue(choices),
        },
        {
          value: 'Thought Echo',
          level: 2,
          data: getRandomValue(choices),
        },
        {
          value: 'Insersion or Withdrawal',
          level: 2,
          data: getRandomValue(choices),
        },
      ],
    },
    {
      id: 8,
      data: [
        {
          value: 'uuid',
          level: 4,
          data: faker.datatype.uuid().split('-')[0],
        },
        {
          value: 'Age',
          level: 4,
          data: Math.floor(Math.random() * 60) + 20,
        },
        {
          value: 'Gender',
          level: 4,
          data: getRandomValue(gender),
        },
        {
          value: 'State of origin',
          level: 4,
          data: getRandomValue(states),
        },
        {
          value: 'Marital Status',
          level: 4,
          data: getRandomValue(maritalStatus),
        },
        {
          value: 'Genotype',
          level: 4,
          data: getRandomValue(genotype),
        },
        {
          value: 'Bloodgroup',
          level: 4,
          data: getRandomValue(bloodGroup),
        },
        {
          value: 'Display of Alogia',
          level: 4,
          data: getRandomValue(choices),
        },
        {
          value: 'Show of Apathy',
          level: 4,
          data: getRandomValue(choices),
        },
        {
          value: 'Third Person Auditory Hallucination',
          level: 1,
          data: getRandomValue(choices),
        },
        {
          value: 'Delusion of Control',
          level: 3,
          data: getRandomValue(choices),
        },
        {
          value: 'Thought Echo',
          level: 2,
          data: getRandomValue(choices),
        },
        {
          value: 'Insersion or Withdrawal',
          level: 2,
          data: getRandomValue(choices),
        },
      ],
    },
    {
      id: 9,
      data: [
        {
          value: 'uuid',
          level: 4,
          data: faker.datatype.uuid().split('-')[0],
        },
        {
          value: 'Age',
          level: 4,
          data: Math.floor(Math.random() * 60) + 20,
        },
        {
          value: 'Gender',
          level: 4,
          data: getRandomValue(gender),
        },
        {
          value: 'State of origin',
          level: 4,
          data: getRandomValue(states),
        },
        {
          value: 'Marital Status',
          level: 4,
          data: getRandomValue(maritalStatus),
        },
        {
          value: 'Genotype',
          level: 4,
          data: getRandomValue(genotype),
        },
        {
          value: 'Bloodgroup',
          level: 4,
          data: getRandomValue(bloodGroup),
        },
        {
          value: 'Display of Alogia',
          level: 4,
          data: getRandomValue(choices),
        },
        {
          value: 'Show of Apathy',
          level: 4,
          data: getRandomValue(choices),
        },
        {
          value: 'Third Person Auditory Hallucination',
          level: 1,
          data: getRandomValue(choices),
        },
        {
          value: 'Delusion of Control',
          level: 3,
          data: getRandomValue(choices),
        },
        {
          value: 'Thought Echo',
          level: 2,
          data: getRandomValue(choices),
        },
        {
          value: 'Insersion or Withdrawal',
          level: 2,
          data: getRandomValue(choices),
        },
      ],
    },
    {
      id: 10,
      data: [
        {
          value: 'uuid',
          level: 4,
          data: faker.datatype.uuid().split('-')[0],
        },
        {
          value: 'Age',
          level: 4,
          data: Math.floor(Math.random() * 60) + 20,
        },
        {
          value: 'Gender',
          level: 4,
          data: getRandomValue(gender),
        },
        {
          value: 'State of origin',
          level: 4,
          data: getRandomValue(states),
        },
        {
          value: 'Marital Status',
          level: 4,
          data: getRandomValue(maritalStatus),
        },
        {
          value: 'Genotype',
          level: 4,
          data: getRandomValue(genotype),
        },
        {
          value: 'Bloodgroup',
          level: 4,
          data: getRandomValue(bloodGroup),
        },
        {
          value: 'Display of Alogia',
          level: 4,
          data: getRandomValue(choices),
        },
        {
          value: 'Show of Apathy',
          level: 4,
          data: getRandomValue(choices),
        },
        {
          value: 'Third Person Auditory Hallucination',
          level: 1,
          data: getRandomValue(choices),
        },
        {
          value: 'Delusion of Control',
          level: 3,
          data: getRandomValue(choices),
        },
        {
          value: 'Thought Echo',
          level: 2,
          data: getRandomValue(choices),
        },
        {
          value: 'Insersion or Withdrawal',
          level: 2,
          data: getRandomValue(choices),
        },
      ],
    },
  ]);
  return (
    <div
      style={{
        width: '100%',
        overflowX: 'scroll',
        display: 'flex',
      }}
    >
      <table border={10}>
        <colgroup>
          <col style={{ backgroundColor: '#ffa' }} />
          <col style={{ backgroundColor: '#3ff' }} />
          <col style={{ backgroundColor: '#dfa' }} />
          <col style={{ backgroundColor: '#dff"' }} />
          <col style={{ backgroundColor: '#cff' }} />
          <col style={{ backgroundColor: '#bff' }} />
          <col style={{ backgroundColor: '#aff' }} />
          <col style={{ backgroundColor: '#9ff' }} />
          <col style={{ backgroundColor: '#8ff' }} />
          <col style={{ backgroundColor: '#8fd' }} />
          <col style={{ backgroundColor: '#dee' }} />
          <col style={{ backgroundColor: '#ded' }} />
          <col style={{ backgroundColor: '#eff' }} />
        </colgroup>
        <TableHeader />
        <tbody>
          {rows
            .filter(({ data }) => data[0].data
              .toString()
              .toLowerCase()
              .includes(search.toLowerCase()))
            ?.map(({ id, data }: any) => (
              <TableRow
                key={`tableRow-${id}`}
                {...{
                  data,
                }}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
