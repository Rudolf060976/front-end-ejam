import React, { ReactNode } from 'react'
import styles from './Features.module.css'
import blueCheck from '../../assets/images/blueCheck.png'

export type FeatureType = {
	id: number
	iconSrc: string
	content: ReactNode	
}

const Features = () => {
	
	return (
		<ul className={styles.featuresList}>
			<li className={styles.featureItem}>
						<img src={blueCheck} alt='Feature Icon' />	
						<p className={styles.normalFont}>Negative Ion Technology may <span className={styles.strongFont}>help with allergens</span></p>
			</li>
			<li className={styles.featureItem}>
						<img src={blueCheck} alt='Feature Icon' />	
						<p className={styles.normalFont}>Designed for <span className={styles.strongFont}>air rejuvenation</span></p>
			</li>
			<li className={styles.featureItem}>
						<img src={blueCheck} alt='Feature Icon' />	
						<p className={styles.normalFont}><span className={styles.strongFont}>Perfect for every room</span>in all types of places</p>
			</li>			
		</ul>
	)
}

export default Features

