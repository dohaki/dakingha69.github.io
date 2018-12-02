import React from 'react';
import { navigate } from 'gatsby-link';
import { TiArrowLeft } from 'react-icons/ti';

const BackHeader = ({ backTo = '/' }) => (
  <div onClick={() => navigate(backTo)}>
    <TiArrowLeft
      className='pointer'
      size='3em'
    />
  </div>
);

export default BackHeader;
