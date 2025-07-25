import { FcFlashOn } from "react-icons/fc"

const ErrorMessage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 absolute inset-0">
      <FcFlashOn size="48" />
      <strong className="text-3xl">Error!</strong>
      <p className="py-8">잠시 후 다시 확인해 주세요. 🤨</p>
    </div>
  )
}

export default ErrorMessage