import Img from "../i-particles/Img"

const ItemsGenre = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <div className="items-container">{
      items.map(i => (
        <a href="#" key={i}>
          <span className="h-fs-st2">Genre</span>
          <Img src={"/img/genre.webp"} alt="godot 4 alpha" />
          <style jsx>{`
            a {
              all: unset;
              position: relative;
              overflow: hidden;
              border-radius: 6px;
              cursor: pointer;
            }
            span {
              position: absolute;
              top: .6rem;
              left: .6rem;
              font-weight: bold;
            }
            img {
              object-fit: cover;
            }
          `}</style>
        </a>
      ))
    }</div>
  )
}

export default ItemsGenre