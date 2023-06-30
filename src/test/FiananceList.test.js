import React from 'react';
import renderer from 'react-test-renderer';
import FinanceList from './__mocks__/FinanceList';

describe('Finance List', () => {
  it('renders correctly', () => {
    const component = renderer.create(<FinanceList />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
