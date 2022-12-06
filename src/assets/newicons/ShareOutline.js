import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {memo} from 'react';
const SvgShareOutline = props => (
  <Svg
    width="25"
    height="25"
    viewBox="0 0 16 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className
    {...props}>
    <Path
      d="M11.438 7.25h1.718a1.719 1.719 0 0 1 1.719 1.719v8.25a1.719 1.719 0 0 1-1.719 1.718H2.844a1.719 1.719 0 0 1-1.719-1.718v-8.25A1.719 1.719 0 0 1 2.844 7.25h1.719m6.875-2.75L8 1.062 4.562 4.5M8 12.793V1.063"
      stroke="#000"
      strokeWidth={1.375}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
const Memo = memo(SvgShareOutline);
export default Memo;
