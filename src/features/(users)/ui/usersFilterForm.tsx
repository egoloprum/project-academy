'use client'

import { motion } from 'framer-motion'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Checkbox } from '@/shared/components'

import {
  UsersFormDirectionsData,
  UsersFormGenerationsData,
  UsersFormRolesData
} from '../helpers/data'

export const UsersFilterForm = ({ onClose }: { onClose: () => void }) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [selectedRoles, setSelectedRoles] = useState<string[]>([])
  const [selectedGenerations, setSelectedGenerations] = useState<string[]>([])
  const [selectedDirections, setSelectedDirections] = useState<string[]>([])

  useEffect(() => {
    const roles = searchParams.get('role')?.split(',') || []
    const generations = searchParams.get('generation')?.split(',') || []
    const directions = searchParams.get('direction')?.split(',') || []

    setSelectedRoles(roles)
    setSelectedGenerations(generations)
    setSelectedDirections(directions)
  }, [searchParams])

  const handleCheckboxChange = (
    value: string,
    category: 'role' | 'generation' | 'direction',
    checked: boolean
  ) => {
    const updateState = (prev: string[]) =>
      checked ? [...prev, value] : prev.filter(v => v !== value)

    switch (category) {
      case 'role':
        setSelectedRoles(updateState)
        break
      case 'generation':
        setSelectedGenerations(updateState)
        break
      case 'direction':
        setSelectedDirections(updateState)
        break
    }
  }

  const handleApplyFilters = (e: React.FormEvent) => {
    e.preventDefault()

    const params = new URLSearchParams(searchParams)

    if (selectedRoles.length) params.set('role', selectedRoles.join(','))
    else params.delete('role')

    if (selectedGenerations.length)
      params.set('generation', selectedGenerations.join(','))
    else params.delete('generation')

    if (selectedDirections.length)
      params.set('direction', selectedDirections.join(','))
    else params.delete('direction')

    router.replace(`${pathname}?${params.toString()}`)

    onClose()
  }

  const handleClearFilters = () => {
    setSelectedRoles([])
    setSelectedGenerations([])
    setSelectedDirections([])

    const params = new URLSearchParams()
    router.replace(`${pathname}?${params.toString()}`)

    onClose()
  }

  return (
    <form
      action=""
      className="border-t h-72 md:h-full overflow-y-auto scrollbar-hidden border-stone-800">
      <ul className="px-4 py-2 sm:py-4 flex flex-col gap-2">
        <p className="text-gray-400">Роль</p>

        {UsersFormRolesData.map(data => (
          <li className="flex items-center gap-2" key={data.id}>
            <Checkbox
              className="cursor-pointer border-lime-300"
              id={data.id}
              checked={selectedRoles.includes(data.role)}
              onCheckedChange={checked =>
                handleCheckboxChange(data.role, 'role', !!checked)
              }
            />
            <label className="font-semibold" htmlFor={data.id}>
              {data.label}
            </label>
          </li>
        ))}
      </ul>

      <ul className="px-4 py-2 sm:py-4 flex flex-col gap-2">
        <p className="text-gray-400">Набор</p>

        {UsersFormGenerationsData.map(data => (
          <li className="flex items-center gap-2" key={data.id}>
            <Checkbox
              className="cursor-pointer border-lime-300"
              id={data.id}
              checked={selectedGenerations.includes(data.generation)}
              onCheckedChange={checked =>
                handleCheckboxChange(data.generation, 'generation', !!checked)
              }
            />
            <label className="font-semibold" htmlFor={data.id}>
              {data.label}
            </label>
          </li>
        ))}
      </ul>

      <ul className="px-4 py-2 sm:py-4 flex flex-col gap-2">
        <p className="text-gray-400">Направление</p>

        {UsersFormDirectionsData.map(data => (
          <li className="flex items-center gap-2" key={data.id}>
            <Checkbox
              className="cursor-pointer border-lime-300"
              id={data.id}
              checked={selectedDirections.includes(data.direction)}
              onCheckedChange={checked =>
                handleCheckboxChange(data.direction, 'direction', !!checked)
              }
            />
            <label className="font-semibold" htmlFor={data.id}>
              {data.label}
            </label>
          </li>
        ))}
      </ul>

      <div className="px-4 py-2 flex flex-row gap-2">
        <motion.button
          type="button"
          className="p-2 px-4 rounded-md cursor-pointer text-black text-sm bg-lime-100 hover:bg-lime-200 active:bg-lime-300 font-medium"
          onClick={handleClearFilters}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          <span>Очистить</span>
        </motion.button>

        <motion.button
          type="button"
          className="p-2 px-4 rounded-md cursor-pointer text-black text-sm bg-lime-300 hover:bg-lime-400 active:bg-lime-500 font-medium"
          onClick={handleApplyFilters}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          <span>Применить</span>
        </motion.button>
      </div>
    </form>
  )
}
