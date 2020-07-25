import React from 'react';

const Captcha = ({token}) => {
  let hash = token;
  const loop = 1000 * 1000;
  for(let i = 0; i < loop; i++) {
    hash = btoa(token + '-' + i);
  }

  return (<input type="text" name="captcha-phrase" readOnly value={hash} style={{width: '100%'}}/>)
};

export default Captcha;