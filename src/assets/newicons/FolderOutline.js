import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {memo} from 'react';
const SvgFolderOutline = props => (
  <Svg
    width="25"
    height="25"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className
    {...props}>
    <Path
      d="M1.375 12.672v4.172a1.719 1.719 0 0 0 1.719 1.718h15.812a1.719 1.719 0 0 0 1.719-1.718V6.53a1.719 1.719 0 0 0-1.719-1.718H9.692M20.625 8.25H10.528"
      stroke="#000"
      strokeWidth={1.375}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.59 4.078a3.815 3.815 0 0 1 0 7.63 3.815 3.815 0 0 1 0-7.63Zm.554 1.584a.613.613 0 0 0-1.226 0v1.647H2.271a.613.613 0 1 0 0 1.226h1.647v1.648a.613.613 0 0 0 1.226 0V8.535h1.648a.613.613 0 1 0 0-1.226H5.144V5.662Z"
      fill="#000"
    />
  </Svg>
);
const Memo = memo(SvgFolderOutline);
export default Memo;
