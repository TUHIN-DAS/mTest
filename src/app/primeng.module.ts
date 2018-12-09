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
	DropdownModule,SidebarModule,ToolbarModule

} from 'primeng/primeng';

import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';


@NgModule({
exports:
	[
		CardModule,ButtonModule,InputTextModule,CheckboxModule,RadioButtonModule,TabViewModule,
		CodeHighlighterModule,MegaMenuModule,PanelModule,BreadcrumbModule,EditorModule,FieldsetModule,
		DropdownModule,SidebarModule,ToastModule,ToolbarModule
	],
	imports: [
	 
	 ],
	 providers: [MessageService]
})

export class PrimeNG {} 