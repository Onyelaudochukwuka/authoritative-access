import React, {
  FC,
} from 'react';

import { useAppSelector } from '../../../utils/hooks';

import style from './index.module.css';

interface ITableHeader {}
interface Heading {
  value: string;
  level: number;
}
const heading: Required<Heading[]> = [
  {
    value: 'Age',
    level: 4,
  },
  {
    value: 'Gender',
    level: 4,
  },
  {
    value: 'State of origin',
    level: 4,
  },
  {
    value: 'Marital Status',
    level: 4,
  },
  {
    value: 'Genotype',
    level: 4,
  },
  {
    value: 'Bloodgroup',
    level: 4,
  },
  {
    value: 'Display of Alogia',
    level: 4,
  },
  {
    value: 'Show of Apathy',
    level: 4,
  },
  {
    value: 'Third Person Auditory Hallucination',
    level: 1,
  },
  {
    value: 'Delusion of Control',
    level: 3,
  },
  {
    value: 'Thought Echo',
    level: 2,
  },
  {
    value: 'Insersion or Withdrawal',
    level: 2,
  },
];

const TableHeader: FC<ITableHeader> = () => {
  const authLevel = useAppSelector((state) => state.app.level);
  // eslint-disable-next-line no-console
  console.log(authLevel);
  return (
    <div className={style.TableHeader} data-testid="table-header-container">
      <div className={style.TableHeader__heading}>
        {heading.map(({ level, value }) => (
          <div
            className={`${style.TableHeader__heading__container}  ${
              (authLevel - level > 0)
              && style.TableHeader__heading__container__display
            }`}
            key={`tableHeader-${value}`}
            data-testid="table-heading"
          >
            <span className={style.TableHeader__heading__container__content}>
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableHeader;
