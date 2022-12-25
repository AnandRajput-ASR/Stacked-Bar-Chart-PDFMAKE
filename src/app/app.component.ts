import { Component } from '@angular/core';
import html2canvas from 'html2canvas';

import { DataService } from './data.service';
// declare var pdfMake: any;
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  docDefinition: any;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          stacked: true,
        },
      ],
      yAxes: [
        {
          stacked: true,
        },
      ],
    },
  };

  public barChartLabels: string[];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: [], label: 'Volume Sales' },
    { data: [], label: 'Value Sales' },
  ];
  constructor(private _emp: DataService) {}
  ngOnInit() {
    this._emp.getSales().subscribe((data) => {
      this.barChartLabels = Object.keys(data);
      this.barChartLabels.forEach((label) => {
        this.barChartData[0].data.push(data[label]['volumeSales']);
        this.barChartData[1].data.push(data[label]['valueSales']);
      });
    });

    setTimeout(() => {
      const chart = document.getElementById('chart');
      html2canvas(chart!).then((canvas) => {
        let content: any[] = [];
        const chartData = canvas.toDataURL('image/png', 1);
        const docDefinition = {
          content: content,
          styles: {
            subheader: {
              fontSize: 16,
              bold: true,
              margin: [0, 10, 0, 5],
              alignment: 'left',
            },
            subsubheader: {
              fontSize: 12,
              italics: true,
              margin: [0, 10, 0, 25],
              alignment: 'left',
            },
          },
          defaultStyle: {
            alignment: 'justify',
          },
        };
        const title = {
          text: 'Here is the export of charts to the PDF',
          style: 'subheader',
        };
        const description = { text: 'Some description', style: 'subsubheader' };
        docDefinition.content.push(title);
        docDefinition.content.push(description);
        // Push image of the chart
        docDefinition.content.push({ image: chartData, width: 500 });
        this.docDefinition = docDefinition;
      });
    }, 1100);
  }

  downloadChart() {
    // Download PDF
    if (this.docDefinition) {
      pdfMake.createPdf(this.docDefinition).download('chartToPdf' + '.pdf');
    } else {
      console.log('Chart is not yet rendered!');
    }
  }

  downloadPDF() {
    // Download PDF
    const pdfTable = document.getElementById('chart');
    html2canvas(pdfTable!, {
      // quality: 4,
      scale: 5,
      useCORS: true,
    }).then((canvas) => {
      const imgObj = {
        image: canvas.toDataURL(),
        width: 600,
        style: {
          alignment: 'center',
        },
      };
      const documentDefinition = {
        content: [imgObj],
        defaultStyle: {
          font: 'NimbusSans',
        },
        pageSize: 'A4',
        pageOrientation: 'landscape',
        pageMargins: [40, 60, 40, 60],
      };
      const pdfDocGenerator = pdfMake.createPdf(documentDefinition);
      pdfDocGenerator.download('anand');
    });
  }
}
