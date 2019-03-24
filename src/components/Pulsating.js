import styled from 'styled-components';

const Pulsating = styled.div`
  &&& {
    @keyframes heartbeat {
      0% {
        transform: scale(0.75);
      }
      20% {
        transform: scale(1);
      }
      40% {
        transform: scale(0.75);
      }
      60% {
        transform: scale(1);
      }
      80% {
        transform: scale(0.75);
      }
      100% {
        transform: scale(0.75);
      }
    }
    animation: heartbeat 1s infinite;
  }
`;

export default Pulsating;
