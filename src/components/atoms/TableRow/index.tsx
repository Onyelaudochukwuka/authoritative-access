import React, { FC } from 'react';

import { useAppSelector } from '../../../utils/hooks';

import style from './index.module.css';

interface ITableRow {
  data: {
    value: string;
    level: number;
    data: string | number;
  }[];
}
const TableRow: FC<ITableRow> = ({ data }) => {
  const authLevel = useAppSelector((state) => state.app.level);
  return (
    <tr
      // className={style.TableRow}
      data-testid="table-row-container"
    >
      {data.map(({ level, data: dataValue }) => (
        <td
          className={`
          ${authLevel - level > 0 && style.TableRow__elements__display}`}
        >
          {dataValue}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
