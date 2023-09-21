import React, { ReactNode } from 'react'
import styles from './ProductInfo.module.css'
import Stars from '../../assets/images/Stars.png'
import checkButton from '../../assets/images/checkButton.png'

export type ProductInfoType = {
	previewImageSrc: string
	title: string
	prevPrice: number
	currentPrice: number
	numberOfStars: number
	stock: number
	description: string
}

type ProductInfoProps = {
	productInfo: ProductInfoType
	onImagePreviewClick: () => void
}

const ProductInfo = ({
	productInfo,
	onImagePreviewClick
}: ProductInfoProps) => {

	const {
		previewImageSrc,
		title,
		prevPrice,
		currentPrice,
		numberOfStars,
		stock,
		description
	} = productInfo

	return (
		<div className={styles.productInfoContainer}>
			<div onClick={onImagePreviewClick} className={styles.previewContainer}>
				<img src={previewImageSrc} alt='Product Preview' />				
			</div>
			<div className={styles.prodTitleContainer}>
				<h3>{title}</h3>
				<div className={styles.priceContainer}>
					<span className={styles.prevPrice}>{`$${prevPrice}`}</span>
					<span className={styles.currPrice}>{`$${currentPrice}`}</span>
				</div>
			</div>
			<div className={styles.starsContainer}>
				<img src={Stars} alt='Stars' />
			</div>
			<div className={styles.stockContainer}>
				<img src={checkButton} alt='Stock check button' />
				<p>{`${stock} left in Stock`}</p>							
			</div>
			<div className={styles.descriptionContainer}>
				<p>{description}</p>
			</div>
		</div>
	)
}

export default ProductInfo