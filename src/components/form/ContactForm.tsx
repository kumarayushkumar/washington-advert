'use server'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { DevTool } from '@hookform/devtools'
import { CiChat1, CiPhone, CiUser } from 'react-icons/ci'
import { CiMail } from 'react-icons/ci'

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
  name: z
    .string()
    .min(CONSTANTS.NAME.min, {
      message: `Name must be at least ${CONSTANTS.NAME.min} characters.`
    })
    .max(CONSTANTS.NAME.max, {
      message: `Name must be less than  ${CONSTANTS.NAME.max} characters.`
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
    .regex(/^[\d+]+$/, { message: 'Please enter a valid phone number.' }),
  message: z
    .string()
    .min(CONSTANTS.MESSAGE.min, {
      message: `Message must be at least ${CONSTANTS.MESSAGE.min} characters.`
    })
    .max(CONSTANTS.MESSAGE.max, {
      message: `Message must be less than ${CONSTANTS.MESSAGE.max} characters.`
    })
})

export function ContactUsForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      email: ''
    }
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-7240px] rounded-md bg-slate-950 p-4">
          <code className="text-white text-xs">
            {JSON.stringify(data, null, 2)}
          </code>
        </pre>
      )
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5 mt-8 mx-auto">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex gap-1 md:gap-4 items-center">
                  <CiUser className="text-4xl" />
                  <Input
                    className="border-accent"
                    placeholder="Name"
                    {...field}
                  />
                </div>
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
                <div className="flex gap-1 md:gap-4 items-center">
                  <CiMail className="text-3xl" />
                  <Input
                    className="w-72 border-accent"
                    placeholder="Email"
                    {...field}
                  />
                </div>
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
                <div className="flex gap-1 md:gap-4 items-center">
                  <CiPhone className="text-3xl" />
                  <Input
                    className="w-72 border-accent"
                    placeholder="Phone number"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex gap-1 md:gap-4 items-center">
                  <CiChat1 className="text-3xl" />
                  <Input
                    className="w-72 border-accent"
                    placeholder="Message"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button
            className="text-base font-highlight bg-white text-accent border-2 border-accent hover:bg-secondary hover:border-secondary hover:text-white font-semibold"
            size="lg"
            type="submit">
            Submit
          </Button>
        </div>
      </form>
      {import.meta.env.VITE_ENVIRONMENT !== 'production' && (
        <DevTool control={form.control} />
      )}
    </Form>
  )
}
