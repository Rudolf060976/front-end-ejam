import React, { ReactNode } from 'react'
import styles from './Header.module.css'
import clarifionLogo from '../../../assets/images/ClarifionLogo.png'
import mcAfeeLogo from '../../../assets/images/McAfeeLogo.png'
import nortonLogo from '../../../assets/images/NortonLogo.png'
import useViewportSize from '../../../hooks/useViewportSize'
import MobileHeader from '../../mobileHeader/MobileHeader'

type HeaderProps = {
	headerItems: {
		logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
		content: string
	}[]
}


const Header = ({ headerItems }: HeaderProps) => {

	const { width } = useViewportSize()

	const isSmallScreen = width <= 360
	
	return (
		<header className={styles.headerWrapper}>
				{
					isSmallScreen ?
					<MobileHeader headerItems={headerItems} /> :
					<ul className={styles.headersList}>
						{headerItems.map(headerItem => {

							const Logo = headerItem.logo

							return (
								<div key={headerItem.content} className={styles.headerItemWrapper}>
									<Logo />
									<span className={styles.headerItem}>{headerItem.content}</span>
								</div>
							)

						})}
					</ul>
				}
				<ul className={styles.productHeaderWrapper}>
					<li className={styles.productHeaderLeft}>
						<img src={clarifionLogo} alt='Clarifion-logo' />
					</li>
					<li className={styles.productHeaderRight}>
						<img className={styles.mcAfeeLogo} src={mcAfeeLogo} alt='mcAfee-logo' />
						<img className={styles.nortonLogo} src={nortonLogo} alt='Norton-logo' />
					</li>
				</ul>				
		</header>
	)
}

export default Header