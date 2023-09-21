import React from 'react'
import styles from './Steps.module.css'
import { StepType } from './Steps'
import greenCheckIcon from '../../assets/images/greenCheck.png'
import blueCircle3Icon from '../../assets/images/blueCircle3.png'
import blueCircle4Icon from '../../assets/images/blueCircle4.png'

type StepItemProps = {
	stepItem: StepType
}

const StepItem = ({ stepItem }: StepItemProps) => {
	
	let iconToDisplay
	
	switch (stepItem.status) {
		case 'done':
			iconToDisplay = greenCheckIcon
			break;
		case 'current':
			iconToDisplay = blueCircle3Icon	
			break;
		case 'pending':
			iconToDisplay = blueCircle4Icon
			break;
		default:			
			break;
	}

	return (
		<li className={styles[`stepWrapper${stepItem.stepNumber}`]}>
			<img className={styles.stepIcon} src={iconToDisplay} alt='step icon' />
			<p className={`${styles.stepTitle} ${stepItem.status === 'current' ? styles.boldItem : ''}`}>{stepItem.stepTitle}</p>
		</li>
	)
}

export default StepItem