import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quotationMark'
})
export class QuotationMarkPipe implements PipeTransform {

 transform(value: any): string{
   let quoteMark = '"';
   return quoteMark + value + quoteMark;
 }

}

