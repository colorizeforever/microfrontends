import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'age'
})

export class AgePipe implements PipeTransform {
  transform(value: number): number {
    const today = new Date().getFullYear()
    const birthYear = new Date(value).getFullYear()

    const currentAge = today - birthYear
    return currentAge;
  }

}
