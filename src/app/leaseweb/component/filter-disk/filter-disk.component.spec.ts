import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterDiskComponent } from './filter-disk.component';

describe('FilterDiskComponent', () => {
  let component: FilterDiskComponent;
  let fixture: ComponentFixture<FilterDiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterDiskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterDiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
