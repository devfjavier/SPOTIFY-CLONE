import svgPaths from "./svgPaths"

const Icon = ({ className, name, fill, stroke }) => {

  return (
    <svg className={className} fill={fill ?? "none"} stroke={stroke} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      {svgPaths[name]}
    </svg>
  )
}

export default Icon