import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveNameComponent } from './directive-name.component';

describe('DirectiveNameComponent', () => {
  let component: DirectiveNameComponent;
  let fixture: ComponentFixture<DirectiveNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
