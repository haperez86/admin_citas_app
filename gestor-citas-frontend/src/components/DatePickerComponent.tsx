
'use client'
import { useState } from 'react'
import { format } from 'date-fns'
import { Calendar } from 'phosphor-react'
import { Button, DatePicker, Popover, PopoverAction, PopoverContent } from 'keep-react'

export const DatePickerComponent = () => {
  const [date, setDate] = useState<Date>()
  return (
    <Popover>
      <PopoverAction asChild>
        <Button
          color="secondary"
          size="lg"
          className="w-[286px] justify-start gap-2.5 border border-metal-100 text-body-4"
          variant="outline">
          <Calendar size={20} className="text-metal-400 dark:text-white" />
          {date ? format(date ?? new Date(), 'PPP') : <span>Select Your Date</span>}
        </Button>
      </PopoverAction>
      <PopoverContent align="start" className="max-w-min border-0">
        <DatePicker mode="single" selected={date} onSelect={setDate} showOutsideDays={true} />
      </PopoverContent>
    </Popover>
  )
}
