import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterDiskTypeComponent } from './filter-disk-type.component';

describe('FilterDiskTypeComponent', () => {
  let component: FilterDiskTypeComponent;
  let fixture: ComponentFixture<FilterDiskTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterDiskTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterDiskTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
