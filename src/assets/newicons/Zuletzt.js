import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';
import {memo} from 'react';
const SvgZuletzt = props => (
  <Svg
    width="25"
    height="25"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className
    {...props}>
    <Path
      d="M12 3c4.969 0 9 4.031 9 9s-4.031 9-9 9-9-4.031-9-9"
      stroke="#959595"
      strokeWidth={2.2}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <Circle cx={3.6} cy={7.2} r={1.2} fill="#959595" />
    <Circle cx={7.2} cy={3.6} r={1.2} fill="#959595" />
    <Path
      d="M12 6.6v6.15h4.5"
      stroke="#959595"
      strokeWidth={2.16}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
const Memo = memo(SvgZuletzt);
export default Memo;
