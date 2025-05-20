import { useEffect, useReducer } from "react"

interface ScreenSizeActionI {
    type: 'UPDATE_SCREEN_SIZE',
}

interface ScreenSizeStateI {
    width: number,
    height: number
}

function screenSizeReducer (state: ScreenSizeStateI, action: ScreenSizeActionI) {
    if (action.type === 'UPDATE_SCREEN_SIZE') {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }
    throw 'Invalid Action'
}

export function useScreenSize () {
    const [screenSize, dispatch] = useReducer(screenSizeReducer, { width: window.innerWidth, height: window.innerHeight })

    useEffect(() => {
        window.addEventListener('resize', (e) => {
            dispatch({ type: 'UPDATE_SCREEN_SIZE' })
        })
    }, [])

    return { screenSize }
}