const sendEmail = async (data: {
  name: string
  email: string
  phone: string
  message: string
}) => {
  const response = await fetch(
    `https://api.retool.com/v1/workflows/1bcf029f-82a1-402f-94fe-a8ff5d0574d6/startTrigger?workflowApiKey=retool_wk_137dbe5dda5d4678ba8813cca485c9bc`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message
      })
    }
  )

  const json = await response.json()
  return json
}

export default sendEmail
