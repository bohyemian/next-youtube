import { BeatLoader } from 'react-spinners'

const LoadingBar = () => {
  return (
    <div className="flex justify-center items-center absolute inset-0">
      <BeatLoader size={10} color="#ccc" />
    </div>
  )
}

export default LoadingBar