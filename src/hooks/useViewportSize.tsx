import { useEffect, useState } from "react"

const useViewportSize = () => {

	const [currentWidth, setCurrentWidth] = useState<number>(window.innerWidth)
	const [currentHeight, setCurrentHeight] = useState<number>(window.innerHeight)

	useEffect(() => {
		
		const handleResize = () => {
			setCurrentWidth(window.innerWidth)
			setCurrentHeight(window.innerHeight)
		}
				
		window.addEventListener('resize', handleResize)		
		
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])	

	return {
		width: currentWidth,
		height: currentHeight
	}

}

export default useViewportSize