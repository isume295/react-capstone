import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getFinance } from '../redux/finance/FinanceSlice';

const mockStore = configureMockStore([thunk]);

describe('getFinance async action', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  it('dispatches the correct actions when API call is successful', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve([
        {
          companyName: '1', symbol: 'Mission 1', currency: 'Description 1', exchange: 'Description 1', sector: 'Description 1', country: 'Description 1', ceo: 'Description 1', industry: 'Description 1', changes: 'Description 1', price: 'Description 1',
        },
        {
          companyName: '1', symbol: 'Mission 2', currency: 'Description 1', exchange: 'Description 1', sector: 'Description 1', country: 'Description 1', ceo: 'Description 1', industry: 'Description 1', changes: 'Description 1', price: 'Description 1',

        },
      ]),
    });

    const expectedActions = [
      getFinance.pending().type,
      getFinance.fulfilled([
        {
          companyName: '1', symbol: 'Mission 1', currency: 'Description 1', exchange: 'Description 1', sector: 'Description 1', country: 'Description 1', ceo: 'Description 1', industry: 'Description 1', changes: 'Description 1', price: 'Description 1',

        },
        {
          companyName: '1', symbol: 'Mission 2', currency: 'Description 1', exchange: 'Description 1', sector: 'Description 1', country: 'Description 1', ceo: 'Description 1', industry: 'Description 1', changes: 'Description 1', price: 'Description 1',

        },
      ]).type,
    ];

    await store.dispatch(getFinance());

    const dispatchedActions = store.getActions();

    expect(dispatchedActions.map((action) => action.type)).toEqual(expectedActions);
  });

  it('dispatches the correct actions when API call fails', async () => {
    global.fetch = jest.fn().mockRejectedValue('API error');

    const expectedActions = [
      getFinance.pending().type,
      getFinance.rejected().type,
    ];

    await store.dispatch(getFinance());

    const dispatchedActions = store.getActions();

    expect(dispatchedActions.map((action) => action.type)).toEqual(expectedActions);
  });
});
