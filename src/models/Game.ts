class Game {
  description: string
  image: string
  infos: string[]
  avaliation: number
  title: string
  id: number
  category: string[]

  constructor(
    id: number,
    description: string,
    image: string,
    infos: string[],
    avaliation: number,
    title: string,
    category: string[]
  ) {
    this.id = id
    this.description = description
    this.image = image
    this.infos = infos
    this.avaliation = avaliation
    this.title = title
    this.category = category
  }
}

export default Game
