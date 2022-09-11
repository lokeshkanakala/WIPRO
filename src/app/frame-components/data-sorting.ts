import { Component, Input } from "@angular/core";

@Component({
    selector: "list-view",
    template: `
    <div class="btn-group">
        <button class="btn btn-outline-primary" [ngClass]="{'active':sortType=='asc'}" (click)="sort_the_data('asc')">Asending</button>
        <button class="btn btn-outline-primary" [ngClass]="{'active':sortType=='dsc'}" (click)="sort_the_data('dsc')">Decending</button>
    </div>
    <div >
        <div class="row mt-3">
            <div class="col-6 mt-2" *ngFor="let item of listData">
                <div class="card">
                    <div class="card-body">
                        <ul>
                            <li *ngFor="let obj of item | keyvalue">{{obj.key | capitalCase}} : {{obj.value}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
})

export class ListView {
    @Input() listData: any[] = [];
    @Input() sortKey: string = "";
    sortType: "asc" | "dsc" = "asc";

    sort_the_data(type: "asc" | "dsc") {
        this.sortType = type
        if (type == "asc") {
            this.listData = this.listData.sort((a: any, b: any) => a[this.sortKey] > b[this.sortKey] ? 1 : -1)
        } else if (type == "dsc") {
            this.listData = this.listData.sort((a: any, b: any) => a[this.sortKey] < b[this.sortKey] ? 1 : -1)
        }
    }
}