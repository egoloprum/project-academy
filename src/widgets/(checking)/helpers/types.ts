type checkingStatus =
  | 'Не проверено'
  | 'Принят на стажировку'
  | 'На рассмотрении'
  | 'Заявка отклонена'

export interface CheckingDataType {
  name: string
  result: string
  date: string
  feedback: string
  status: checkingStatus
}
