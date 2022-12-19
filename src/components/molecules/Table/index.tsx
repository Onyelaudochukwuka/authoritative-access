import React, { FC, useState } from 'react';

import { useAppSelector } from '../../../utils/hooks';
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
          value: 'Name',
          level: 4,
          data: 'Ahmed',
        },
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
          value: 'Name',
          level: 4,
          data: 'Lawalade',
        },
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
          value: 'Name',
          level: 4,
          data: 'Peter',
        },
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
          value: 'Name',
          level: 4,
          data: 'James',
        },
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
          value: 'Name',
          level: 4,
          data: 'Nnamdi',
        },
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
          value: 'Paul',
          level: 4,
          data: 'Ahmed',
        },
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
          value: 'Matthew',
          level: 4,
          data: 'Ahmed',
        },
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
          value: 'Chris',
          level: 4,
          data: 'Ahmed',
        },
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
          value: 'John',
          level: 4,
          data: 'Ahmed',
        },
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
          value: 'Name',
          level: 4,
          data: 'Jack',
        },
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
    <table className={style.Table}>
      <TableHeader />
      {rows.filter(({ data }) => data[0].data.toString().toLowerCase()
        .includes(search.toLowerCase()))?.map(({ id, data }: any) => (
          <TableRow
            key={`tableRow-${id}`}
            index={id}
            {...{
              data,
            }}
          />
      ))}
    </table>
  );
};

export default Table;
