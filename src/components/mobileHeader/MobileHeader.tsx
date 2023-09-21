import React, { useState } from 'react'
import styles from './MobileHeader.module.css'
import arrowButtonLeft from '../../assets/images/arrowButtonLeft.png'
import arrowButtonRight from '../../assets/images/arrowButtonRight.png'

type HeaderItemType = {
	logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
	content: string
}

type MobileHeaderProps = {
	headerItems: HeaderItemType[]
}

const MobileHeader = ({
	headerItems
}: MobileHeaderProps) => {

	const [currentItem, setCurrentItem] = useState<HeaderItemType>(headerItems[0])

	const Logo = currentItem.logo

	const currentIndex = headerItems.findIndex(item => item.content === currentItem.content)

	const clickLeftHandler = () => {
		
		if (currentIndex === 0) {
			const maxIndex = headerItems.length - 1
			setCurrentItem(headerItems[maxIndex])
		} else {
			setCurrentItem(headerItems[currentIndex - 1])
		}
	}

	const clickRightHandler = () => {
		const maxIndex = headerItems.length - 1

		if (currentIndex === maxIndex) {
			setCurrentItem(headerItems[0])
		} else {
			setCurrentItem(headerItems[currentIndex + 1])
		}
	}

	return (
		<div className={styles.headerWrapper}>
			<span onClick={clickLeftHandler} className={styles.leftArrow}><img src={arrowButtonLeft} alt='Left Arrow' /></span>
			<div className={styles.headerItemWrapper}>
								<Logo />
								<span className={styles.headerItem}>{currentItem.content}</span>
			</div>
			<span onClick={clickRightHandler} className={styles.rightArrow}><img src={arrowButtonRight} alt='Right Arrow' /></span>
		</div>
	)
}

export default MobileHeader