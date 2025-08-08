export type Status = {
  id: string
  value: 'Not-checked' | 'Accepted' | 'Pending' | 'Rejected'
  content:
    | 'Не проверено'
    | 'Принят на стажировку'
    | 'На рассмотрении'
    | 'Заявка отклонена'
}
