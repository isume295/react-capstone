import React from 'react';
import renderer from 'react-test-renderer';
import Detail from './__mocks__/Detail';

describe('Finance Detail', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Detail />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
