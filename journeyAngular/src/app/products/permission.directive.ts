import {
	Directive,
	Input,
	TemplateRef,
	ViewContainerRef,
	OnInit,
} from "@angular/core";

@Directive({
	selector: "[appPermission]",
})
export class PermissionDirective implements OnInit {
	@Input() appPermission: string[] = [];

	private currentRole = "agent";

	constructor(
		private tmplRef: TemplateRef<any>,
		private viewContainer: ViewContainerRef
	) {}

	ngOnInit(): void {
		if (this.appPermission.indexOf(this.currentRole) === -1) {
			this.viewContainer.clear();
		} else {
			this.viewContainer.createEmbeddedView(this.tmplRef);
		}
	}
}
