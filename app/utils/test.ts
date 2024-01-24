'use client'
import { FormEvent } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { DestinationItem } from '../components/types'


export const Selector = () => {
    const router = useRouter()
    const pathNameParams = new URLSearchParams(usePathname()?.replace('/', ''))
    const { location, month, budget, activity } = Object.fromEntries(pathNameParams) as Record<
      SearchKeys,
      string
    >
  
    const submit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
  
      const formData = new FormData(event.target as HTMLFormElement)
      const formProps = Object.fromEntries(formData)
  
      if (!formProps[SearchKeys.Location] || !formProps[SearchKeys.Month]) return
  
      const newSearchParams = new URLSearchParams(formProps as Record<string, string>)
  
      router.push('/' + newSearchParams.toString())
    }
  
    return (