export type TableFinalType = {
  id: number
  table: 'select' | 'final'
  isSelected: boolean
  name: string
  result: string
  status:
    | 'Не проверено'
    | 'Принят на стажировку'
    | 'На рассмотрении'
    | 'Заявка отклонена'
  comment: string
  animate?: boolean
}
