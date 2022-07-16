/**
 * Includes base path in "src" prop, base path is a empty string in Mobile version.
 * @returns img element
 */

const Img = ({ src, ...rest }) => (
  <img src={process.env.projectPath + src} {...rest} />
)

export default Img