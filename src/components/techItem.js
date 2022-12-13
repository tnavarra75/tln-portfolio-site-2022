import * as React from 'react'
import { ReactSVG } from 'react-svg'

const TechItem = ({ item }) => (
	<li className='tech-item'>
		<span className='tech-icon'>
			<ReactSVG src={`${item.icon}`} alt={`${item.name} icon`} />
		</span>
		<span className='tech-name'>
			{item.name}
		</span>
	</li>
)

export default TechItem