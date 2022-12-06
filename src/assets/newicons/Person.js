import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {memo} from 'react';
const SvgPerson = props => (
  <Svg
    width="25"
    height="25"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className
    {...props}>
    <Path
      d="M11 0C4.935 0 0 4.935 0 11s4.935 11 11 11 11-4.935 11-11S17.065 0 11 0ZM8.344 6.178c.67-.71 1.613-1.101 2.656-1.101 1.043 0 1.977.393 2.65 1.107.682.724 1.013 1.696.935 2.74C14.428 11 12.821 12.693 11 12.693c-1.82 0-3.432-1.692-3.585-3.768-.078-1.053.253-2.028.93-2.746ZM11 20.308a9.28 9.28 0 0 1-6.663-2.815 6.5 6.5 0 0 1 1.858-1.768c1.348-.864 3.054-1.34 4.805-1.34s3.457.476 4.803 1.34a6.499 6.499 0 0 1 1.86 1.768A9.28 9.28 0 0 1 11 20.308Z"
      fill="#959595"
    />
  </Svg>
);
const Memo = memo(SvgPerson);
export default Memo;
