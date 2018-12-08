/*
Name : primeng.module.ts
Author : Tuhin Das
Description
-----------
This class should be use to export any primeng module into the app.
**Note : Dont include unused modules.
*/
import { NgModule } from '@angular/core';
import {
	CardModule,ButtonModule,InputTextModule,CheckboxModule,RadioButtonModule,TabViewModule,
	CodeHighlighterModule,MegaMenuModule,PanelModule,BreadcrumbModule,EditorModule,FieldsetModule,
	DropdownModule,SidebarModule

} from 'primeng/primeng';



@NgModule({
exports:
	[
		CardModule,ButtonModule,InputTextModule,CheckboxModule,RadioButtonModule,TabViewModule,
		CodeHighlighterModule,MegaMenuModule,PanelModule,BreadcrumbModule,EditorModule,FieldsetModule,
		DropdownModule,SidebarModule
	],
	imports: [
	 
	 ],
})

export class PrimeNG {} 