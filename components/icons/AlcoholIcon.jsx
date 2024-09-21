import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={10}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#000"
        d="M.813.625a.925.925 0 0 0-.615.217.533.533 0 0 0-.19.498l1.27 6.697c.144.768 1 1.338 2.01 1.338h6.424c1.008 0 1.864-.568 2.01-1.338l1.27-6.697a.532.532 0 0 0-.19-.498.935.935 0 0 0-.614-.217H.813Zm1.414 3.75-.475-2.5h9.496l-.475 2.5H2.227Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h13v10H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
