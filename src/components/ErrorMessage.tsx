export default function ErrorMessage({
  success,
  message
}: {
  success: boolean
  message: string
}) {
  return (
    <div className="mt-4">
      <p
        className={`font-medium text-sm text-center font-sub ${success ? 'text-red-500' : 'text-green-600'}`}>
        {message}
      </p>
    </div>
  )
}
