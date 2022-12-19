import React, { FC } from 'react';

import { useAppSelector } from '../../../utils/hooks';

import style from './index.module.css';

interface ITableRow {
  data: {
    value: string;
    level: number;
    data: string | number;
  }[];
  index: number;
}
const TableRow: FC<ITableRow> = ({ data, index }) => {
  const authLevel = useAppSelector((state) => state.app.level);
  return (
    <tr
      className={style.TableRow}
      data-testid="table-row-container"
      style={{
        backgroundColor: index % 2 === 0 ? '#dee' : '#efe',
      }}
    >
      {data.map(({ level, data: dataValue }) => (
        <td
          className={`${style.TableRow__elements} 
          ${authLevel - level > 0 && style.TableRow__elements__display}`}
        >
          {dataValue}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
