import { Anchor } from 'grommet';
import styled from 'styled-components';

const RotatedAnchor = styled(Anchor)`
  &&& {
    transform: ${props =>
      props.direction === 'left' ? 'rotate(90deg)' : 'rotate(270deg)'};
  }
`;

export default RotatedAnchor;
