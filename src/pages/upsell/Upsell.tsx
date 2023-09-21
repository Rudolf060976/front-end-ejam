import React, { useState } from 'react'
import styles from './Upsell.module.css'
import Steps, { StepType } from '../../components/steps/Steps'
import bigProductImage from '../../assets/images/bigProductImage.png'
import commentImage from '../../assets/images/comment.png'
import productImagePreview from '../../assets/images/productImagePreview.png'
import blueCheck from '../../assets/images/blueCheck.png'
import ProductInfo, { ProductInfoType } from '../../components/productInfo/ProductInfo'
import Features, { FeatureType } from '../../components/features/Features'
import Save from '../../components/save/Save'
import Payments from '../../components/Payments/Payments'
import satisfactionIcon from '../../assets/images/satisfactionIcon.png'
import useViewportSize from '../../hooks/useViewportSize'


const Upsell = () => {

	const [showImage, setShowImage] = useState(false)
	
	const { width } = useViewportSize()

	const isSmallScreen = width <= 360

	const shouldShowPicture = isSmallScreen ? showImage : true

	const stepsData = isSmallScreen ? stepsDataSmall : stepsDataLarge

	const handlePreviewClick = () => {

		setShowImage(prevState => !prevState)

	}
 
	return (
		<main className={styles.pageWrapper}>
			<div className={styles.pageTitleWrapper}>
				<h1 className={styles.pageTitle}>Wait! Your Order in Progress.</h1>
				<h3 className={styles.pageSubtitle}>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing</h3>
			</div>
			<Steps steps={stepsData} />
			<div className={styles.gridContainer}>
				{shouldShowPicture && <div className={styles.pictureContainer}>
					<img src={bigProductImage} alt='Product Image' />
				</div>}
				<div className={styles.commentContainer}>
					{!isSmallScreen && <img src={commentImage} alt='Comment' />}
				</div>
				<div className={styles.titleContainer}>
					<h1 className={styles.titleNormal}><span className={styles.titleBlue}>ONE TIME ONLY</span> Special Price For 6 Extra Clarifion For Only <span className={styles.titleBlue}>$14 Each</span> ($84.00 Total!)</h1>
				</div>
				<div className={styles.contentContainer}>
					<ProductInfo productInfo={productInfo} onImagePreviewClick={handlePreviewClick} />
					<Features features={features} />
					<div className={styles.saveAndDiscountButtonWrapper}>
						<Save savePercentage='53%' getString='6 extra Clarifision' price='$14 Each'/>
						<button className={styles.discountButton}>YES - CLAIM MY DISCOUNT &#129122;</button>
					</div>						
					<Payments />
					<a href='#' className={styles.noThanks} >NO THANKS, I DON'T WANT THIS</a>
					<div className={styles.saveAndDiscountButtonWrapper}>
						<div className={styles.satisfactionContainer}>
							<img src={satisfactionIcon} alt='Satisfaction Icon' />
							<p>If you are not completely thrilled with your Clarifion - We have a <span className={styles.satisfactionStrong}>30 day satisfaction guarantee</span>. Please refer to our return policy at the bottom of the page for more details. Happy Shopping!</p>
						</div>
					</div>					
				</div>				
			</div>
		</main>
	)
}

export default Upsell

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

const stepsDataLarge: StepType[] = [
	{
		stepNumber: 1,
		stepTitle: 'Step 1: Cart Review',
		status: 'done'
	},
	{
		stepNumber: 2,
		stepTitle: 'Step 2: Checkout',
		status: 'done'
	},
	{
		stepNumber: 3,
		stepTitle: 'Step 3: Special Offer',
		status: 'current'
	},
	{
		stepNumber: 4,
		stepTitle: 'Step 4: Confirmation',
		status: 'pending'
	}
]

const stepsDataSmall: StepType[] = [
	{
		stepNumber: 1,
		stepTitle: 'Cart Review',
		status: 'done'
	},
	{
		stepNumber: 2,
		stepTitle: 'Checkout',
		status: 'done'
	},
	{
		stepNumber: 3,
		stepTitle: 'Special Offer',
		status: 'current'
	},
	{
		stepNumber: 4,
		stepTitle: 'Confirmation',
		status: 'pending'
	}
]

const productInfo: ProductInfoType = {
	previewImageSrc: productImagePreview,
	title: 'Clarifion Air Ionizer',
	prevPrice: 180,
	currentPrice: 84,
	numberOfStars: 5,
	stock: 12,
	description: 'Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.'
}