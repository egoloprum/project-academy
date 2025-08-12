'use client'

import { motion } from 'framer-motion'
import { Paperclip, Trash2 } from 'lucide-react'
import { useRef, useState } from 'react'

import { Input, Label, Textarea } from '@/shared/components'

import { useTask } from '../helpers/taskContext'

export const TaskAddAnswerForm = ({}) => {
  const { setAddAnswerFlag } = useTask()
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleRemoveFile = () => {
    setSelectedFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <form action="">
      <Label htmlFor="task-textarea" className="mb-2 text-gray-400">
        Прикрепить ответ
      </Label>
      <Textarea
        id="task-textarea"
        className="min-h-20 max-h-24 border-none bg-stone-800 hover:bg-stone-900 active:bg-stone-950"
      />
      <motion.div
        className="relative mt-4 w-fit max-w-48"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}>
        <label
          className="flex gap-2 items-center bg-stone-800 hover:bg-stone-900 active:bg-stone-950 w-full px-4 py-2 rounded-md cursor-pointer text-nowrap absolute top-0 font-medium"
          htmlFor="input-file">
          <Paperclip className="w-4 h-4" />
          <span>Прикрепить файл</span>
        </label>
        <Input
          className="w-full text-start flex justify-start cursor-pointer z-10 opacity-0"
          type="file"
          id="input-file"
          onChange={handleFileChange}
        />
      </motion.div>
      {selectedFile && (
        <div className="flex items-center gap-2 mt-4">
          <span className="text-nowrap">Прикрепленный файл:</span>
          <span className="truncate max-w-40 text-lime-300">
            {selectedFile.name}
          </span>
          <motion.button
            type="button"
            className="cursor-pointer text-red-500 ml-auto p-2 rounded-md"
            onClick={handleRemoveFile}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}>
            <Trash2 className="w-5 h-5" />
          </motion.button>
        </div>
      )}
      <div className="mt-8 flex gap-4">
        <motion.button
          type="button"
          className="px-8 py-2 w-[75%] sm:w-fit rounded-md font-medium text-white bg-transparent hover:bg-stone-900 active:bg-stone-950 cursor-pointer"
          onClick={() => setAddAnswerFlag('formClose')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}>
          Отмена
        </motion.button>
        <motion.button
          type="button"
          className="px-12 py-2 w-full sm:w-fit rounded-md font-medium text-black bg-lime-300 hover:bg-lime-400 active:bg-lime-500 cursor-pointer"
          onClick={() => setAddAnswerFlag('formClose')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}>
          Отправить
        </motion.button>
      </div>
    </form>
  )
}
