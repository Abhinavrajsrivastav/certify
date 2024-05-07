import React from 'react';
import { useLocation } from 'react-router-dom';
import './Certificate.css';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

function Certificate() {
    const location = useLocation();
    const state = location.state || {}; 

    const width = window.innerWidth;

    const handleDownload = () => {
        const certificateContainer = document.querySelector('.certificate-container');

        html2canvas(certificateContainer).then(canvas => {
            // Convert the canvas to an image data URL
            const imageData = canvas.toDataURL('image/png');

            // Initialize jsPDF with proper dimensions based on the size of the certificate
            const pdfWidth = certificateContainer.offsetWidth * 1.5; // Adjust scale factor as needed
            const pdfHeight = certificateContainer.offsetHeight * 1.5; // Adjust scale factor as needed
            const pdf = new jsPDF('p', 'pt', [pdfWidth, pdfHeight]);

            // Add the image to the PDF document
            const imageWidth = width >= 1005 ? 800 : 1000; // Adjusted for different screen sizes
            pdf.addImage(imageData, 'PNG', 0, 0, imageWidth, pdfHeight);

            // Add course ID at the bottom-right corner
            pdf.text(state.courseId, pdfWidth - 50, pdfHeight - 20);

            // Save the PDF document
            pdf.save('certificate.pdf');
        });
    };

    return (
        <div className='certificate-page'>
            <div className='certificate-container'>
                <img src="./Images/Certificate.png" alt='Certificate Template' className='certificate-template' />
                <div className='certificate-details'>
                    <p className='name'>{state.name}</p>
                    <p className='detail'>For successfully completing the Tutedude {state.courseDetails} 
                    course on {state.duration}</p>
                </div>
                <div className='courseId'>{state.courseId}</div>
            </div>
            <button className='download-button' onClick={handleDownload}>Download Certificate</button>
        </div>
    );
}

export default Certificate;
