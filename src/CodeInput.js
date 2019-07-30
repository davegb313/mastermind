import React from 'react';

const CodeInput = ({ code, onChange, colors })=> (
  code.map((digit, i) => (
    <div key={i} className={'dot-'+digit}>
      <button className={'up'+i} onClick={()=> onChange(
        code.map((dot, index)=>(
          index !== i ? dot : (dot+1) % colors
        ))
      )}>up</button>
      <button className={'dn'+i}onClick={()=> onChange(
        code.map((dot, index)=>(
          index !== i ? dot : (dot + colors - 1) % colors
        ))
      )}>dn</button>
    </div>
  ))
);

export default CodeInput;
