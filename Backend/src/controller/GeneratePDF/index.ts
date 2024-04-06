import { logger } from '../../logger/logger';
// import { SuccessResponse } from '../../responseTypes/SuccessResponse';
import { IRequest, IResponse } from '../../service/types';
import puppeteer from 'puppeteer';
import handlebars from 'handlebars';
import fs from 'fs';
import path from 'path';

export class GeneratePDF {
    async generate(req: IRequest, res: IResponse): Promise<IResponse> {
        try {
            const data = {
                aadharNo: '123432190121',
                studentId: 123232,
                firstName: 'Dummy',
                middleName: 'abc',
                lastName: 'User',
                mothersName: 'temp',
                motherTongue: 'Hindi',
                birthDate: '2024-03-05',
                birthPlace: 'इचलकरंजी',
                religion: 'Marathi',
                caste: 'Maratha',
                subCaste: 'Maratha',
                previousSchoolName: 'AntarBharti',
                dateOfAdmission: '2024-03-04',
                division: 'II B',
                progressInStudy: 'Good Job',
                behaviour: 'abc',
                currentDivision: 2,
                reasonOfLeaving: 'NA',
                shera: 'NA',
                classTeacher: 1,
                createdAt: '2024-03-13T08:46:03.000Z',
                updatedAt: '2024-03-13T08:46:03.000Z',
                taluka: 'हातकणंगले',
                district: 'कोल्हापूर',
                state: 'महाराष्ट्र',
                country: 'भारत'
            };

            const pdfBuffer = await this.generatePDFFile(data);
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'attachment; filename="generated_pdf.pdf"');
            return res.send(pdfBuffer);
        } catch (error: any) {
            logger.error('>>> getBirthInfo error - ', error);
            return res.status(error.status).json(error);
        }
    }
    async generatePDFFile(data: Record<string, unknown>, base64 = true) {
        try {
            const htmlContentCompiled = this.getTemplate(data);
            const browser = await puppeteer.launch();

            // Create a new page
            const page = await browser.newPage();
            await page.setContent(htmlContentCompiled, { waitUntil: 'domcontentloaded' });

            // To reflect CSS used for screens instead of print
            await page.emulateMediaType('screen');

            // Downlaod the PDF
            const pdf = await page.pdf({
                margin: { top: '100px', right: '20px', bottom: '100px', left: '20px' },
                printBackground: true,
                format: 'A4'
            });

            // Close the browser instance
            await browser.close();
            if (!base64) {
                return pdf;
            }
            return pdf;
        } catch (e) {
            logger.info('>>> Error while generating PDF', e);
            throw e;
        }
    }
    getTemplate(data: Record<string, unknown>) {
        const htmlFilePath = path.join(__dirname, '/template/user-info.html');
        // Read HTML content from file
        let htmlContent = fs.readFileSync(htmlFilePath, 'utf8');
        // Compile HTML content using Handlebars and return compiled template
        return handlebars.compile(htmlContent)(data);
    }
}
