import React from 'react';
import { Collapse } from 'antd';
import './accordian.css'


const { Panel } = Collapse;

function Accordian({ items }) {
  return (
    <div className='lg:w-3/4 mx-auto pt-16'>
       <Collapse bordered={false} defaultActiveKey={['']}>
        {items.map((item) => (
          <Panel key={item.key} header ={item.label}>
            <p className='sm:text-[15px]'>{item.children}</p>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
}

export default Accordian;
