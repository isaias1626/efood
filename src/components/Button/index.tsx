import * as S from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ title, type, to, onClick, children }: Props) => {
  if (type === 'button') {
    return (
      <S.ButtonContainer title={title} onClick={onClick}>
        {children}
      </S.ButtonContainer>
    )
  }

  return (
    <S.ButtonLink to={to as string} title={title}>
      {children}
    </S.ButtonLink>
  )
}

export default Button
