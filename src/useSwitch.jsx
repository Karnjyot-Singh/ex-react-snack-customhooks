import { useState } from "react";

function useSwitch(initialValue = false){
    const [isOn, setIsOn] = useState(initialValue)
    const toggle = () => {
        setIsOn(curr => !curr)
    }
    return[isOn, toggle]
}

export default useSwitch;