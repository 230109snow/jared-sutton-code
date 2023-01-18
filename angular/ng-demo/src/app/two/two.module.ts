import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FooComponent } from "./foo/foo.component";

@NgModule({
    declarations: [
        FooComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [

    ]
})
export class TwoModule { }