import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#000"
        d="M9.918.528 8.594 1.85l3.555 3.555 1.323-1.324a1.75 1.75 0 0 0 0-2.474L12.395.528a1.75 1.75 0 0 0-2.475 0h-.002ZM7.976 2.469 1.602 8.846a2.425 2.425 0 0 0-.607 1.022l-.968 3.29a.656.656 0 0 0 .812.817l3.29-.968a2.424 2.424 0 0 0 1.023-.607l6.379-6.376-3.555-3.555Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h14v14H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
