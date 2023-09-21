import React from 'react'
import styles from './Payments.module.css'
import { ReactComponent as LockIcon } from '../../assets/images/lock.svg'
import paymentsIcon from '../../assets/images/payments.png'

const Payments = () => {
	return (
		<div className={styles.paymentsContainer}>
			<span className={styles.shipping}>Free Shipping</span>			
			<span className={styles.secure}>
				<LockIcon />
				<span className={styles.secureText}>Secure 256-Bit SSL Encryption</span>				
			</span>
			<span className={styles.payments}>
				<img src={paymentsIcon} alt='Payments' />
			</span>			
		</div>
	)
}

export default Payments