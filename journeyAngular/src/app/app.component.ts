import { Component, Inject, OnDestroy } from "@angular/core";
import { APP_CONFIG, AppConfig, appSettings } from "src/app.config";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	providers: [{ provide: APP_CONFIG, useValue: appSettings }],
})
export class AppComponent implements OnDestroy {
	title = "journeyAngular";

	constructor(@Inject(APP_CONFIG) config: AppConfig) {}
	ngOnDestroy(): void {}
}
