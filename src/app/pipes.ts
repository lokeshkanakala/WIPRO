import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "stringreverse" })
export class ReversePipe implements PipeTransform {
    transform(value: string): string {
        return value.split('').reverse().join('');
    }
}

@Pipe({ name: "capitalCase" })
export class CapitalCase implements PipeTransform {
    transform(value: any): string {
        try { 
            return value.split('_').map((e:any)=>e[0].toUpperCase()+e.slice(1)).join(" ");
        } catch { }
        return value
    }
}