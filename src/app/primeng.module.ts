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
	DropdownModule,SidebarModule,ToolbarModule,DialogModule

} from 'primeng/primeng';

import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {BlockUIModule} from 'primeng/blockui';
@NgModule({
exports:
	[
		CardModule,ButtonModule,InputTextModule,CheckboxModule,RadioButtonModule,TabViewModule,
		CodeHighlighterModule,MegaMenuModule,PanelModule,BreadcrumbModule,EditorModule,FieldsetModule,
		DropdownModule,SidebarModule,ToastModule,ToolbarModule,DynamicDialogModule,DialogModule,
		ProgressSpinnerModule,BlockUIModule
	],
	imports: [
	 
	 ],
	 providers: [MessageService]
})

export class PrimeNG {} 