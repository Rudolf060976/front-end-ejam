import React from 'react'
import lockLogo from '../../../assets/images/bigLock.png'
import styles from './Footer.module.css'

const Footer = () => {
	return (
		<footer className={styles.footerWrapper}>
			<div className={styles.leftFooterWrapper}>
				<span className={styles.leftFooterLeftItem}>Copyright (C) 2023</span>
				<span className={styles.leftFooterRightItem}>clarifionsupport@clarifion.com</span>
			</div>
			<span className={styles.rightFooterWrapper}>
				<img src={lockLogo} alt='Lock Logo' />
				<span className={styles.rightFooterText}>Secure 256-Bit SSL Encryption</span>
			</span>
		</footer>
	)
}

export default Footer