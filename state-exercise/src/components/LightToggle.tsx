import { Dispatch, SetStateAction } from 'react'

interface LightToggleProps {
  setIsLightsOn: Dispatch<SetStateAction<boolean>>
}

const LightToggle = ({ setIsLightsOn }: LightToggleProps) => {
  return (
    <button onClick={() => setIsLightsOn((prev) => !prev)}>
      Toggle Lights
    </button>
  )
}

export default LightToggle
