import React, { ReactNode } from 'react'
import styles from './Features.module.css'

export type FeatureType = {
	id: number
	iconSrc: string
	content: ReactNode	
}

type FeaturesProps = {
	features: FeatureType[]
}

const Features = ({
	features
}: FeaturesProps) => {
	
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