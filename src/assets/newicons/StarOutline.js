import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {memo} from 'react';
const SvgStarOutline = props => (
  <Svg
    width="25"
    height="25"
    viewBox="0 0 18 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className
    {...props}>
    <Path
      d="M16.631 8.124c.825-.548.437-1.833-.553-1.833H12.13a1 1 0 0 1-.948-.682L9.948 1.926c-.305-.91-1.591-.91-1.896 0L6.817 5.61a1 1 0 0 1-.948.682H1.923c-.99 0-1.379 1.285-.554 1.833l3.09 2.053a1 1 0 0 1 .39 1.162l-1.228 3.529c-.32.917.724 1.705 1.519 1.147l3.285-2.308a1 1 0 0 1 1.15 0l3.286 2.308c.795.558 1.838-.23 1.519-1.147l-1.229-3.53a1 1 0 0 1 .391-1.16l3.09-2.054Z"
      stroke="#000"
      strokeWidth={1.38}
      strokeLinejoin="round"
    />
  </Svg>
);
const Memo = memo(SvgStarOutline);
export default Memo;
