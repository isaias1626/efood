export const ParseToBrl = (amount: number) => {
  return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(
    amount
  )
}
