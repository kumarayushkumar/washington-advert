import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'
import { CONSTANTS } from '@/utils/constants'

const FormSchema = z.object({
  websiteURL: z
    .string()
    .min(CONSTANTS.WEBSITE_URL.min, {
      message: `URL name must be at least ${CONSTANTS.WEBSITE_URL.min} characters.`
    })
    .max(CONSTANTS.WEBSITE_URL.max, {
      message: `URL name must be less than  ${CONSTANTS.WEBSITE_URL.max} characters.`
    }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  phone: z
    .string()
    .min(CONSTANTS.PHONE_NUMBER.min, {
      message: `Phone no. must be at least ${CONSTANTS.PHONE_NUMBER.min} characters.`
    })
    .max(CONSTANTS.PHONE_NUMBER.max, {
      message: `Phone no. must be less than ${CONSTANTS.PHONE_NUMBER.max} characters.`
    })
    .regex(/^[\d+]+$/, { message: 'Please enter a valid phone number.' })
})

export function SeoAuditForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      websiteURL: '',
      email: ''
    }
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-7240px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      )
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2">
        <FormField
          control={form.control}
          name="websiteURL"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="w-72" placeholder="Website URL" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="w-72" placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="w-72" placeholder="Phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="text-base font-highlight font-medium bg-accent py-2"
          size="lg"
          type="submit">
          Submit
        </Button>
      </form>
    </Form>
  )
}
