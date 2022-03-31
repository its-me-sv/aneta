import styled from 'styled-components';

const HorizontalLine = styled.div<{ variant?: number }>`
  border-bottom: 2px solid #f0f2f5;
  opacity: 0.6;
  ${(props) => props.variant === 2 && `border-bottom: 2px solid #4b4d4f;`}
`;

export default HorizontalLine;