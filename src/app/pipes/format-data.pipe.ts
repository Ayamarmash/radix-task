import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatData',
  standalone: true
})
export class FormatDataPipe implements PipeTransform {

  transform(value: string): string {
    if (this.isDate(value)) {
      return this.formatDate(value);
    }
    return value;
  }

  private isDate(value: string): boolean {
    if (/^\d+$/.test(value) || value.length < 6) {
      return false;
    }

    const parsedDate = Date.parse(value);
    return !isNaN(parsedDate) && value.includes('-');
  }

  private formatDate(value: string): string {
    const date = new Date(value);
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    };
    return date.toLocaleString(navigator.language || 'en-US', options).replace(',', '');
  }
}
