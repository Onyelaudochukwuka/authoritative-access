import React, { FC } from 'react';

import { Search } from '../../assets';
import { Layout, Table } from '../../components';
import { useAppDispatch } from '../../utils/hooks';
import { search } from '../../utils/redux/appSlice';

import style from './index.module.css';

interface IUserDashboard {}

const UserDashboard: FC<IUserDashboard> = () => {
  const dispatch = useAppDispatch();
  return (
    <Layout className={style.UserDashboard}>
      Search For Name:
      <div className={style.UserDashboard__search}>
        <input
          className={style.Input}
          onChange={(e) => dispatch(search(e.target.value))}
        />
        <div
          className={style.Input__searchbar}
          role="button"
          aria-label="search"
          tabIndex={0}
        >
          <Search className={style.Input__searchbar__icon} />
        </div>
      </div>
      <h2 className={style.UserDashboard__heading} data-testid="user-heading">
        Patients
      </h2>
      <Table />
    </Layout>
  );
};
export default UserDashboard;
