import { ChartDataProps } from './types'

export const statsTableData = [
  {
    name: 'Иванов И.И.',
    direction: 'Backend',
    result: '96%',
    review: 'Хорошая работа, вроде все правильно, нет недочетов сильных',
    date: '25.03.24',
    birthday: '11.05.2000'
  },
  {
    name: 'Иванов И.И.',
    direction: 'Backend',
    result: '96%',
    review: 'Хорошая работа, вроде все правильно, нет недочетов сильных',
    date: '25.03.24',
    birthday: '11.05.2000'
  },
  {
    name: 'Иванов И.И.',
    direction: 'Backend',
    result: '96%',
    review: 'Хорошая работа, вроде все правильно, нет недочетов сильных',
    date: '25.03.24',
    birthday: '11.05.2000'
  },
  {
    name: 'Иванов И.И.',
    direction: 'Backend',
    result: '96%',
    review: 'Хорошая работа, вроде все правильно, нет недочетов сильных',
    date: '25.03.24',
    birthday: '11.05.2000'
  },
  {
    name: 'Иванов И.И.',
    direction: 'Backend',
    result: '96%',
    review: 'Хорошая работа, вроде все правильно, нет недочетов сильных',
    date: '25.03.24',
    birthday: '11.05.2000'
  }
]

export const dashboardTableData = [
  {
    city: 'Томск',
    applicationCount: '81',
    percentOfApplications: '5,3'
  },
  {
    city: 'Северск',
    applicationCount: '24',
    percentOfApplications: '5,3'
  },
  {
    city: 'Новосибирск',
    applicationCount: '17',
    percentOfApplications: '5,3'
  },
  {
    city: 'Санкт-Петербург',
    applicationCount: '10',
    percentOfApplications: '5,3'
  },
  {
    city: 'Красноярск',
    applicationCount: '10',
    percentOfApplications: '5,3'
  },
  {
    city: 'Москва',
    applicationCount: '8',
    percentOfApplications: '5,3'
  }
]

export const ChartDistributionData: ChartDataProps[] = [
  { label: 'Frontend', value: 12, fill: '#c084fc' },
  { label: 'Backend', value: 10, fill: '#fb7185' },
  { label: 'QA', value: 21, fill: '#22d3ee' },
  { label: 'UX/UI', value: 19, fill: '#fb923c' },
  { label: 'PM', value: 17, fill: '#818cf8' },
  { label: 'SA', value: 17, fill: '#4ade80' },
  { label: 'CEO', value: 4, fill: '#facc15' }
]

export const ChartAgeGroupData: ChartDataProps[] = [
  { label: '40+', value: 5, fill: '#4ade80' },
  { label: '35-40', value: 8, fill: '#fca5a5' },
  { label: '30-35', value: 7, fill: '#fed7aa' },
  { label: '18-21', value: 49, fill: '#60a5fa' },
  { label: '26-29', value: 10, fill: '#fef08a' },
  { label: '22-25', value: 21, fill: '#e879f9' }
]

export const ChartEmploymentTypeData: ChartDataProps[] = [
  { label: 'Учусь', value: 83, fill: '#2dd4bf' },
  { label: 'Работаю', value: 67, fill: '#c026d3' }
]
