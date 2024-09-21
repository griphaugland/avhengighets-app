import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={15}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M13.459 1.429c.09-.201.034-.38-.143-.457-.176-.077-.442-.04-.68.098l-1.015.586-8.93 5.157L.862 7.867c-.238.138-.404.35-.425.54-.022.192.105.33.324.352l1.247.131-.51 1.145c-.114.253.007.463.284.492l1.246.131-.51 1.145c-.114.253.008.463.285.492l1.246.131-.51 1.145c-.09.201-.034.38.143.457.176.077.442.04.68-.098l1.827-1.055 8.93-5.156 1.016-.586c.238-.138.404-.35.425-.54.022-.192-.105-.33-.324-.352L14.99 6.11l.51-1.145c.113-.253-.008-.463-.285-.492l-1.246-.131.51-1.145c.114-.253-.008-.463-.285-.492l-1.246-.131.51-1.145Z"
      clipRule="evenodd"
    />
    <Path
      fill="#D9D9D9"
      d="m1.987 7.219.866-.5 3.5 6.062-.866.5zM10.647 2.219l.866-.5 3.5 6.062-.866.5z"
    />
  </Svg>
)
export default SvgComponent
