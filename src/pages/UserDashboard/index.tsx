import React, { FC } from 'react';

import { Layout, Table } from '../../components';

import style from './index.module.css';

interface IUserDashboard {}

const UserDashboard: FC<IUserDashboard> = () => (
  <Layout className={style.UserDashboard}>
    <h2 className={style.UserDashboard__heading} data-testid="user-heading">Patients</h2>
    <Table />
  </Layout>
);

export default UserDashboard;
