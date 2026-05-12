import React from 'react'
import resumePdf from '../../assets/Aguirre_Cesar_Support.pdf'

function ResumeWindowComponent() {
	return (
		<div className="h-full w-full" style={{ overflow: 'hidden' }}>
			<iframe
				src={`${resumePdf}#toolbar=0`}
				title="Aguirre Cesar Support resume PDF"
				className="h-full w-full"
				style={{ border: 'none', width: '100%', height: '100%' }}
			/>
			<div style={{ display: 'none' }}>
				<a href={resumePdf} target="_blank" rel="noreferrer">Open Aguirre_Cesar_Support.pdf</a>
			</div>
		</div>
	)
}

export default ResumeWindowComponent
