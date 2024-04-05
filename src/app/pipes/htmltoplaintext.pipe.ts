import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlToPlainText'
})

export class HtmlToPlainTextPipe implements PipeTransform {

  transform(value: string): string {
    const html = new DOMParser().parseFromString(value, 'text/html');
    return html.body.textContent || '';
  }

}