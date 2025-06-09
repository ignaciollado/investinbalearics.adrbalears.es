import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({ name: 'replaceStringHtml' })
export class ReplaceStringHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string, search: string, replacement: string): SafeHtml {
    if (!value) return value;
    const replaced = value.replace(new RegExp(search, 'g'), replacement);
    return this.sanitizer.bypassSecurityTrustHtml(replaced);
  }
}
