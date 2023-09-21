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
			{features.map(feature => {
				return (
					<li key={feature.id} className={styles.featureItem}>
						<img src={feature.iconSrc} alt='Feature Icon' />	
						{feature.content}
					</li>
				)
			})}
		</ul>
	)
}

export default Features

const features: FeatureType[] = [
	{
		id: 1,
		iconSrc: blueCheck,
		content: <p className={styles.normalFont}>Negative Ion Technology may <span className={styles.strongFont}>help with allergens</span></p>
	},
	{
		id: 2,
		iconSrc: blueCheck,
		content: <p className={styles.normalFont}>Designed for <span className={styles.strongFont}>air rejuvenation</span></p>
	},
	{
		id: 3,
		iconSrc: blueCheck,
		content: <p className={styles.normalFont}><span className={styles.strongFont}>Perfect for every room</span>in all types of places</p>
	}
]