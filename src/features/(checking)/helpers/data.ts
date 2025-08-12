import { CheckingTableType } from '@/entities/checking'

export const checkingTablePendingData: CheckingTableType[] = [
  {
    name: 'Иванов И.И.',
    result: '',
    date: '01.01.2025',
    feedback: '',
    status: 'Не проверено'
  },
  {
    name: 'Петров П.С.',
    result: '',
    date: '6.01.2025',
    feedback: '',
    status: 'Не проверено'
  },
  {
    name: 'Гун Л.И.',
    result: '',
    date: '01.01.2025',
    feedback: '',
    status: 'Не проверено'
  },
  {
    name: 'Левкович Ф.И.',
    result: '',
    date: '01.01.2025',
    feedback: '',
    status: 'Не проверено'
  }
]

export const checkingTableDoneData: CheckingTableType[] = [
  {
    name: 'Иванов И.И.',
    result: '83',
    date: '01.01.2025',
    feedback: 'Хорошая работа, нравится структура',
    status: 'Принят на стажировку'
  },
  {
    name: 'Петров П.С.',
    result: '75',
    date: '6.01.2025',
    feedback: 'Работа выполнена хорошо, но были грубые недочеты',
    status: 'На рассмотрении'
  },
  {
    name: 'Гун Л.И.',
    result: '13',
    date: '08.01.2025',
    feedback: 'Ужасная работа',
    status: 'Заявка отклонена'
  },
  {
    name: 'Левкович Ф.И.',
    result: '',
    date: '01.01.2025',
    feedback: '',
    status: 'Не проверено'
  }
]
