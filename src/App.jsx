import 'bulma/css/bulma.css';
import './App.scss';
import React, { useState } from 'react';
import classNames from 'classnames';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const SelectGoods = ({ selectGood, setSelectGood }) => (
  <>
    {selectGood.length === 0 ? (
      <h1 className="title is-flex is-align-items-center">No goods selected</h1>
    ) : (
      selectGood.map(good => (
        <h1 className="title is-flex is-align-items-center">
          {good} is selected
          <button
            onClick={() => {
              setSelectGood(selectGood.filter(el => el !== good));
            }}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        </h1>
      ))
    )}
    {}
  </>
);

const AddGoods = ({ items, selectGood, setSelectGood }) => (
  <table className="table">
    <tbody>
      {items.map(good => (
        <tr
          data-cy="Good"
          // key={index}
          className={classNames({
            'has-background-success-light': selectGood.find(
              item => item === good,
            ),
          })}
        >
          <td>
            <button
              onClick={() => {
                const action = selectGood.find(item => item === good)
                  ? 'remove'
                  : 'add';

                if (action === 'add') {
                  setSelectGood([good]);
                } else {
                  setSelectGood(selectGood.filter(item => item !== good));
                }
              }}
              data-cy={
                selectGood.find(item => item === good)
                  ? 'RemoveButton'
                  : 'AddButton'
              }
              type="button"
              className={classNames('button', {
                'is-info': selectGood.find(item => item === good),
              })}
            >
              {selectGood.find(item => item === good) ? '-' : '+'}
            </button>
          </td>

          <td data-cy="GoodTitle" className="is-vcentered">
            {good}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export const App = () => {
  const [selectGood, setSelectGood] = useState(['Jam']);

  return (
    <main className="section container">
      <SelectGoods selectGood={selectGood} setSelectGood={setSelectGood} />

      <AddGoods
        items={goods}
        selectGood={selectGood}
        setSelectGood={setSelectGood}
      />
    </main>
  );
};
