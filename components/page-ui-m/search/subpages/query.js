import Icon from "../../../icon-svg"

const PageQuery_uiM = () => {
  return <>
    <form className="h-color-light">
      <Icon name="arrowLeft" size="1.27rem" />
      <input className="h-unset" placeholder="Search query" />
      <Icon  name="camera" size="1.27rem" />
      <style jsx>{`
        form {
          display: flex;
          align-items: center;
          gap: 0 .6rem;
          height: 2.6rem;
          padding: 0 .6rem;
          background-color: var(--menu-hover-bg-color);        
        }

        input {
          width: 100%;
        }
      `}</style>
    </form>
    <div className="container">
      <p className="h-color-light h-fs-st2">Play what you love</p>
      <p className="h-color-gray">Search for artists, songs, podcasts, and more.</p>
      <style jsx>{`
        div {
          text-align: center;
          height: 50vh;
          margin-top: 6rem;
        }

        .h-fs-st2 {
          font-weight: bold;
          margin-bottom: .27rem;
        }
      `}</style>
    </div>
  </>
}

export default PageQuery_uiM