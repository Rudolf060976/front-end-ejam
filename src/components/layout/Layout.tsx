import React from 'react'
import styles from './Layout.module.css'
import Header from './header/Header'
import { ReactComponent as SatisfactionLogo } from '../../assets/images/satisfactionGuarantee.svg'
import { ReactComponent as FreeDeliveryLogo } from '../../assets/images/freeDelivery.svg'
import { ReactComponent as HappyCustomersLogo } from '../../assets/images/happyCustomers.svg'
import { ReactComponent as MoneyBackLogo } from '../../assets/images/moneyBack.svg'
import Footer from './footer/Footer'

const Layout = ({ children }:{ children: React.ReactNode }) => {
	
	const headerItems = [
		{
			logo: SatisfactionLogo,
			content: '30-DAY SATISFACTION GUARANTEE'
		},
		{
			logo: FreeDeliveryLogo,
			content: 'FREE DELIVERY ON ORDERS OVER $40.00'
		},
		{
			logo: HappyCustomersLogo,
			content: '50.000+ HAPPY CUSTOMERS'
		},
		{
			logo: MoneyBackLogo,
			content: '100% MONEY BACK GUARANTEE'
		}
	]

	return (
		<div className={styles.layoutWrapper}>
			<Header headerItems={headerItems} />
			{children}
			<Footer />
		</div>
		
	)
}

export default Layout