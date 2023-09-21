import React from 'react'
import styles from './Save.module.css'
import circlePercentageIcon from '../../assets/images/circlePercentage.png'

type SaveProps = {
	savePercentage: string
	getString: string
	price: string
}

const Save = ({
	savePercentage,
	getString,
	price
}: SaveProps) => {
	return (
		<div className={styles.saveContainer}>
			<img src={circlePercentageIcon} alt='Percentage Icon' />
			<p className={styles.normalText}>Save <span className={styles.strongText}>{savePercentage}</span> and get <span className={styles.strongText}>{getString}</span> for only <span className={styles.strongText}>{price}</span></p>
		</div>
	)
}

export default Save