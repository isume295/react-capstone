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
          symbol: '1', name: 'Mission 1', sector: 'Description 1', subSector: 'Description 1', headQuarter: 'Description 1', dateFirstAdded: 'Description 1', cik: 'Description 1', founded: 'Description 1',

        },
        {
          symbol: '1', name: 'Mission 1', sector: 'Description 1', subSector: 'Description 1', headQuarter: 'Description 1', dateFirstAdded: 'Description 1', cik: 'Description 1', founded: 'Description 1',

        },
      ]),
    });

    const expectedActions = [
      getFinance.pending().type,
      getFinance.fulfilled([
        {
          symbol: '1', name: 'Mission 1', sector: 'Description 1', subSector: 'Description 1', headQuarter: 'Description 1', dateFirstAdded: 'Description 1', cik: 'Description 1', founded: 'Description 1',

        },
        {
          symbol: '2', name: 'Mission 1', sector: 'Description 1', subSector: 'Description 1', headQuarter: 'Description 1', dateFirstAdded: 'Description 1', cik: 'Description 1', founded: 'Description 1',

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
