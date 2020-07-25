import React from 'react';

const generateDate = (year, month, day) => new Date(year, month, day, 0, 0, 0, 0);
const todayDate = new Date();
const todayDay = todayDate.getDate();
const todayMonth = todayDate.getMonth();
const todayYear = todayDate.getFullYear();

const getRelativeDate = (date) => {
  return '';
};

const data = [
  {id: 1, name: 'iPad Mini', purchaseOn: generateDate(todayYear, todayMonth, todayDay)},
  {id: 2, name: 'Samsung - 65" 4K UHD TV', purchaseOn: generateDate(todayYear, todayMonth, todayDay - 1)},
  {id: 3, name: 'Samsung - 65" 4K UHD TV', purchaseOn: generateDate(todayYear, todayMonth, todayDay - 3)},
  {id: 4, name: 'Jabra - Elite 75t Wireless Headphones', purchaseOn: generateDate(todayYear, todayMonth, todayDay - 7)},
  {id: 5, name: 'Canon - PowerShot G5 X', purchaseOn: generateDate(todayYear, todayMonth, todayDay - 10)},
  {id: 6, name: 'Dell - S2719DGF 27" LED Monitor', purchaseOn: generateDate(todayYear, todayMonth - 1, todayDay)},
  {id: 7, name: 'Angel Has Fallen - Blu-ray DVD', purchaseOn: generateDate(todayYear, 0, 1)},
  {id: 8, name: 'Fitbit - Charge 3 Activity Tracker', purchaseOn: generateDate(todayYear - 1, 11, 1)},
  {id: 9, name: 'Logitech - G502 Wired Optical Mouse', purchaseOn: generateDate(todayYear - 2, 1, 1)},
];

const RelativeDate = () => {
  return (
    <section>
      <p>Today: {todayDate.toLocaleDateString()}</p>
      <table>
        <thead>
        <tr>
          <th>Nº</th>
          <th>Item</th>
          <th>Purchase On</th>
          <th>When</th>
        </tr>
        </thead>
        <tbody>
        {data.map(({id, name, purchaseOn}, idx) => (
          <tr key={id}>
            <td>{idx + 1}</td>
            <td>{name}</td>
            <td>{purchaseOn.toLocaleDateString()}</td>
            <td>{getRelativeDate(purchaseOn)}</td>
          </tr>)
        )}
        </tbody>
      </table>
    </section>);
};

export default RelativeDate;