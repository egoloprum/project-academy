type checkingStatus =
  | 'Не проверено'
  | 'Принят на стажировку'
  | 'На рассмотрении'
  | 'Заявка отклонена'

export interface CheckingTableType {
  name: string
  result: string
  date: string
  feedback: string
  status: checkingStatus
}
