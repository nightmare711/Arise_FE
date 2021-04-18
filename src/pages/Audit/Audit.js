import React from 'react'
import { CardCopyRight } from 'pages/Home/Card'
import { Document, Page, pdfjs } from 'react-pdf'
import './Audit.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
export const Audit = () => {
	const [numPages, setNumPages] = React.useState(null)
	const [pageNumber, setPageNumber] = React.useState(1)
	const onClickPrev = () => {
		if (pageNumber > 1) {
			setPageNumber(pageNumber - 1)
		}
	}
	const onClickNext = () => {
		if (pageNumber < numPages) {
			setPageNumber(pageNumber + 1)
		}
	}
	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages)
	}

	return (
		<div className='audit-view'>
			<div className='card-audit'>
				<div className='txt-see-more'>
					<span>See full report: </span>
					<a href='https://solidity.finance/audits/Arise/' target='_blank' rel='noreferrer'>
						Solidity.finance
					</a>
				</div>
				{window.screen.width > 700 ? (
					<div className='preview'>
						<div style={!numPages ? { opacity: 0, transition: 'all 0.3s' } : {}}>
							<Document file='./Arise-Audit.pdf' onLoadSuccess={onDocumentLoadSuccess}>
								<Page pageNumber={pageNumber} />
							</Document>
						</div>
						<div className='pageControl'>
							<div onClick={onClickPrev} className='btn-control prev-btn'>
								{'<'}
							</div>
							<div className='page-number'>
								{pageNumber} of {numPages}
							</div>
							<div onClick={onClickNext} className='btn-control next-btn'>
								{'>'}
							</div>
						</div>
					</div>
				) : null}
			</div>
			<CardCopyRight />
		</div>
	)
}
