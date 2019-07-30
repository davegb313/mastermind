import React from 'react';
import './enzyme-config';
import { mount } from 'enzyme';

import CodeInput from './CodeInput';

it('renders the code input', ()=>{
  const onChange = jest.fn();
  const p = mount(<CodeInput code={[1,2,3,4]} onChange={onChange} colors={6}/>);

  expect (p.find('button')).toHaveLength(8);

  expect(p.find('.dot-1')).toHaveLength(1);
  expect(p.find('.dot-2')).toHaveLength(1);
  expect(p.find('.dot-3')).toHaveLength(1);
  expect(p.find('.dot-4')).toHaveLength(1);

  const up0 = p.find('button.up0');
  expect(up0).toHaveLength(1);

  up0.at(0).simulate('click');
  expect( onChange.mock.calls ).toHaveLength(1);

  expect( onChange.mock.calls[0][0]).toEqual([2,2,3,4]);

  const dn0 = p.find('button.dn0');
  expect(dn0).toHaveLength(1);

  dn0.at(0).simulate('click');
  expect( onChange.mock.calls ).toHaveLength(2);

  expect( onChange.mock.calls[1][0]).toEqual([0,2,3,4]);

});


it('rolls overon the edge cases', ()=>{
  const onChange = jest.fn();
  const p = mount(<CodeInput code={[0,2,3,5]} onChange={onChange} colors={6}/>);

  p.find('.dn0').at(0).simulate('click');
  expect( onChange.mock.calls ).toHaveLength(1);
  expect(onChange.mock.calls[0][0]).toEqual([5,2,3,5]);

  p.find('.up3').at(0).simulate('click');
  expect( onChange.mock.calls ).toHaveLength(2);
  expect(onChange.mock.calls[1][0]).toEqual([0,2,3,0]);
});
