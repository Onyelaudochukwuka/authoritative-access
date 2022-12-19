import React, { FC, useState } from 'react';

import { TableHeader, TableRow } from '../../atoms';

import style from './index.module.css';

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
          value: 'Age',
          level: 4,
          data: 23,
        },
        {
          value: 'Gender',
          level: 4,
          data: 'Male',
        },
        {
          value: 'State of origin',
          level: 4,
          data: 'Lagos',
        },
        {
          value: 'Marital Status',
          level: 4,
          data: 'Single',
        },
        {
          value: 'Genotype',
          level: 4,
          data: 'AA',
        },
        {
          value: 'Bloodgroup',
          level: 4,
          data: 'A+',
        },
        {
          value: 'Display of Alogia',
          level: 4,
          data: 'Yes',
        },
        {
          value: 'Show of Apathy',
          level: 4,
          data: 'Yes',
        },
        {
          value: 'Third Person Auditory Hallucination',
          level: 1,
          data: 'Yes',
        },
        {
          value: 'Delusion of Control',
          level: 3,
          data: 'Yes',
        },
        {
          value: 'Thought Echo',
          level: 2,
          data: 'Yes',
        },
        {
          value: 'Insersion or Withdrawal',
          level: 2,
          data: 'Yes',
        },
      ],
    },
    {
      id: 2,
      data: [
        {
          value: 'Age',
          level: 4,
          data: 23,
        },
        {
          value: 'Gender',
          level: 4,
          data: 'Male',
        },
        {
          value: 'State of origin',
          level: 4,
          data: 'Lagos',
        },
        {
          value: 'Marital Status',
          level: 4,
          data: 'Single',
        },
        {
          value: 'Genotype',
          level: 4,
          data: 'AA',
        },
        {
          value: 'Bloodgroup',
          level: 4,
          data: 'A+',
        },
        {
          value: 'Display of Alogia',
          level: 4,
          data: 'Yes',
        },
        {
          value: 'Show of Apathy',
          level: 4,
          data: 'Yes',
        },
        {
          value: 'Third Person Auditory Hallucination',
          level: 1,
          data: 'Yes',
        },
        {
          value: 'Delusion of Control',
          level: 3,
          data: 'Yes',
        },
        {
          value: 'Thought Echo',
          level: 2,
          data: 'Yes',
        },
        {
          value: 'Insersion or Withdrawal',
          level: 2,
          data: 'Yes',
        },
      ],
    },
    {
      id: 3,
      data: [
        {
          value: 'Age',
          level: 4,
          data: 23,
        },
        {
          value: 'Gender',
          level: 4,
          data: 'Male',
        },
        {
          value: 'State of origin',
          level: 4,
          data: 'Lagos',
        },
        {
          value: 'Marital Status',
          level: 4,
          data: 'Single',
        },
        {
          value: 'Genotype',
          level: 4,
          data: 'AA',
        },
        {
          value: 'Bloodgroup',
          level: 4,
          data: 'A+',
        },
        {
          value: 'Display of Alogia',
          level: 4,
          data: 'Yes',
        },
        {
          value: 'Show of Apathy',
          level: 4,
          data: 'Yes',
        },
        {
          value: 'Third Person Auditory Hallucination',
          level: 1,
          data: 'Yes',
        },
        {
          value: 'Delusion of Control',
          level: 3,
          data: 'Yes',
        },
        {
          value: 'Thought Echo',
          level: 2,
          data: 'Yes',
        },
        {
          value: 'Insersion or Withdrawal',
          level: 2,
          data: 'Yes',
        },
      ],
    },
    {
      id: 4,
      data: [
        {
          value: 'Age',
          level: 4,
          data: 23,
        },
        {
          value: 'Gender',
          level: 4,
          data: 'Male',
        },
        {
          value: 'State of origin',
          level: 4,
          data: 'Lagos',
        },
        {
          value: 'Marital Status',
          level: 4,
          data: 'Single',
        },
        {
          value: 'Genotype',
          level: 4,
          data: 'AA',
        },
        {
          value: 'Bloodgroup',
          level: 4,
          data: 'A+',
        },
        {
          value: 'Display of Alogia',
          level: 4,
          data: 'Yes',
        },
        {
          value: 'Show of Apathy',
          level: 4,
          data: 'Yes',
        },
        {
          value: 'Third Person Auditory Hallucination',
          level: 1,
          data: 'Yes',
        },
        {
          value: 'Delusion of Control',
          level: 3,
          data: 'Yes',
        },
        {
          value: 'Thought Echo',
          level: 2,
          data: 'Yes',
        },
        {
          value: 'Insersion or Withdrawal',
          level: 2,
          data: 'Yes',
        },
      ],
    },
    {
      id: 5,
      data: [
        {
          value: 'Age',
          level: 4,
          data: 23,
        },
        {
          value: 'Gender',
          level: 4,
          data: 'Male',
        },
        {
          value: 'State of origin',
          level: 4,
          data: 'Lagos',
        },
        {
          value: 'Marital Status',
          level: 4,
          data: 'Single',
        },
        {
          value: 'Genotype',
          level: 4,
          data: 'AA',
        },
        {
          value: 'Bloodgroup',
          level: 4,
          data: 'A+',
        },
        {
          value: 'Display of Alogia',
          level: 4,
          data: 'Yes',
        },
        {
          value: 'Show of Apathy',
          level: 4,
          data: 'Yes',
        },
        {
          value: 'Third Person Auditory Hallucination',
          level: 1,
          data: 'Yes',
        },
        {
          value: 'Delusion of Control',
          level: 3,
          data: 'Yes',
        },
        {
          value: 'Thought Echo',
          level: 2,
          data: 'Yes',
        },
        {
          value: 'Insersion or Withdrawal',
          level: 2,
          data: 'Yes',
        },
      ],
    },
    {
      id: 6,
      data: [
        {
          value: 'Age',
          level: 4,
          data: 23,
        },
        {
          value: 'Gender',
          level: 4,
          data: 'Male',
        },
        {
          value: 'State of origin',
          level: 4,
          data: 'Lagos',
        },
        {
          value: 'Marital Status',
          level: 4,
          data: 'Single',
        },
        {
          value: 'Genotype',
          level: 4,
          data: 'AA',
        },
        {
          value: 'Bloodgroup',
          level: 4,
          data: 'A+',
        },
        {
          value: 'Display of Alogia',
          level: 4,
          data: 'Yes',
        },
        {
          value: 'Show of Apathy',
          level: 4,
          data: 'Yes',
        },
        {
          value: 'Third Person Auditory Hallucination',
          level: 1,
          data: 'Yes',
        },
        {
          value: 'Delusion of Control',
          level: 3,
          data: 'Yes',
        },
        {
          value: 'Thought Echo',
          level: 2,
          data: 'Yes',
        },
        {
          value: 'Insersion or Withdrawal',
          level: 2,
          data: 'Yes',
        },
      ],
    },
    {
      id: 7,
      data: [
        {
          value: 'Age',
          level: 4,
          data: 23,
        },
        {
          value: 'Gender',
          level: 4,
          data: 'Male',
        },
        {
          value: 'State of origin',
          level: 4,
          data: 'Lagos',
        },
        {
          value: 'Marital Status',
          level: 4,
          data: 'Single',
        },
        {
          value: 'Genotype',
          level: 4,
          data: 'AA',
        },
        {
          value: 'Bloodgroup',
          level: 4,
          data: 'A+',
        },
        {
          value: 'Display of Alogia',
          level: 4,
          data: 'Yes',
        },
        {
          value: 'Show of Apathy',
          level: 4,
          data: 'Yes',
        },
        {
          value: 'Third Person Auditory Hallucination',
          level: 1,
          data: 'Yes',
        },
        {
          value: 'Delusion of Control',
          level: 3,
          data: 'Yes',
        },
        {
          value: 'Thought Echo',
          level: 2,
          data: 'Yes',
        },
        {
          value: 'Insersion or Withdrawal',
          level: 2,
          data: 'Yes',
        },
      ],
    },
    {
      id: 8,
      data: [
        {
          value: 'Age',
          level: 4,
          data: 23,
        },
        {
          value: 'Gender',
          level: 4,
          data: 'Male',
        },
        {
          value: 'State of origin',
          level: 4,
          data: 'Lagos',
        },
        {
          value: 'Marital Status',
          level: 4,
          data: 'Single',
        },
        {
          value: 'Genotype',
          level: 4,
          data: 'AA',
        },
        {
          value: 'Bloodgroup',
          level: 4,
          data: 'A+',
        },
        {
          value: 'Display of Alogia',
          level: 4,
          data: 'Yes',
        },
        {
          value: 'Show of Apathy',
          level: 4,
          data: 'Yes',
        },
        {
          value: 'Third Person Auditory Hallucination',
          level: 1,
          data: 'Yes',
        },
        {
          value: 'Delusion of Control',
          level: 3,
          data: 'Yes',
        },
        {
          value: 'Thought Echo',
          level: 2,
          data: 'Yes',
        },
        {
          value: 'Insersion or Withdrawal',
          level: 2,
          data: 'Yes',
        },
      ],
    },
    {
      id: 9,
      data: [
        {
          value: 'Age',
          level: 4,
          data: 23,
        },
        {
          value: 'Gender',
          level: 4,
          data: 'Male',
        },
        {
          value: 'State of origin',
          level: 4,
          data: 'Lagos',
        },
        {
          value: 'Marital Status',
          level: 4,
          data: 'Single',
        },
        {
          value: 'Genotype',
          level: 4,
          data: 'AA',
        },
        {
          value: 'Bloodgroup',
          level: 4,
          data: 'A+',
        },
        {
          value: 'Display of Alogia',
          level: 4,
          data: 'Yes',
        },
        {
          value: 'Show of Apathy',
          level: 4,
          data: 'Yes',
        },
        {
          value: 'Third Person Auditory Hallucination',
          level: 1,
          data: 'Yes',
        },
        {
          value: 'Delusion of Control',
          level: 3,
          data: 'Yes',
        },
        {
          value: 'Thought Echo',
          level: 2,
          data: 'Yes',
        },
        {
          value: 'Insersion or Withdrawal',
          level: 2,
          data: 'Yes',
        },
      ],
    },
    {
      id: 10,
      data: [
        {
          value: 'Age',
          level: 4,
          data: 23,
        },
        {
          value: 'Gender',
          level: 4,
          data: 'Male',
        },
        {
          value: 'State of origin',
          level: 4,
          data: 'Lagos',
        },
        {
          value: 'Marital Status',
          level: 4,
          data: 'Single',
        },
        {
          value: 'Genotype',
          level: 4,
          data: 'AA',
        },
        {
          value: 'Bloodgroup',
          level: 4,
          data: 'A+',
        },
        {
          value: 'Display of Alogia',
          level: 4,
          data: 'Yes',
        },
        {
          value: 'Show of Apathy',
          level: 4,
          data: 'Yes',
        },
        {
          value: 'Third Person Auditory Hallucination',
          level: 1,
          data: 'Yes',
        },
        {
          value: 'Delusion of Control',
          level: 3,
          data: 'Yes',
        },
        {
          value: 'Thought Echo',
          level: 2,
          data: 'Yes',
        },
        {
          value: 'Insersion or Withdrawal',
          level: 2,
          data: 'Yes',
        },
      ],
    },
  ]);
  return (
    <div className={style.Table}>
      <TableHeader />
      <div className={style.Table__row}>
        {rows?.map(({ id, data }: any) => (
          <TableRow
            key={`tableRow-${id}`}
            {...{
              data,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Table;
