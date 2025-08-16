import { BeatLoader } from 'react-spinners'

const LoadingBar = () => {
  return (
    <div className="flex justify-center items-center flex-1">
      <BeatLoader size={10} color="#ccc" />
    </div>
  )
}

export default LoadingBar