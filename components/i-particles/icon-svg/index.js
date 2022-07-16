import svgPaths from "./svgPaths"

const Icon = ({ className, name, size, fill = "currentColor", stroke }) => {

  return (
    <svg className={className} fill={fill} stroke={stroke} width={size} height={size} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      {svgPaths[name]}
    </svg>
  )
}

export default Icon