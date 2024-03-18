type Props = {
  title: string
  description: string
  image: string
}

const Italiana = ({ title, description, image }: Props) => (
  <div>
    <div className="container">
      <div>
        <div>
          <img src={image} alt="" />
        </div>
        <h4>{title}</h4>
        <p>{description}</p>
        <button>adcionar ao carrinho</button>
      </div>
    </div>
  </div>
)

export default Italiana
