import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeNameComponent } from './pipe-name.component';

describe('PipeNameComponent', () => {
  let component: PipeNameComponent;
  let fixture: ComponentFixture<PipeNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
