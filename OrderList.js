import React from 'react';
import styles from './OrderList.module.css';

const orders = [
  { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status:<mark >Delivered</mark> },
  { customer: 'Jane Cooper', orderNo: '4896786', amount: '$305.02', status: <mark >Delivered</mark> },
  { customer: 'Guy Hawkins', orderNo: '78985215', amount: '$45.88', status: <mark >Cancelled</mark> },
  { customer: 'Kristin Watson', orderNo: '20965732', amount: '$50.00', status:<mark>Pending</mark> },
  { customer: 'Cody Fisher', orderNo: '95715620', amount: '$545.00', status: <mark>Delivered</mark> },
  { customer: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: <mark>Delivered</mark> },
];

const OrderList = () => {
  return (
    <div className={styles.orderList}>
      <h2>Recent Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Order No.</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.orderNo}>
              <td>{order.customer}</td>
              <td>{order.orderNo}</td>
              <td>{order.amount}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
