import React from 'react'
import styles from './Steps.module.css'
import StepItem from './StepItem'

export type StepType = {
	stepNumber: number
	stepTitle: string
	status: 'pending' | 'current' | 'done'
}

type StepsProps = {
	steps: StepType[]
}

const Steps = ({ steps }: StepsProps) => {

	return (
		<ul className={styles.stepsWrapper}>
			{steps.map(stepItem => {

				return (
					<StepItem key={stepItem.stepNumber} stepItem={stepItem} />
				)

			})}
		</ul>
	)

	

}

export default Steps