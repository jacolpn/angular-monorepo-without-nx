import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibBeehiveRGSharedComponent } from './lib-beehive-rg-shared.component';

describe('LibBeehiveRGSharedComponent', () => {
  let component: LibBeehiveRGSharedComponent;
  let fixture: ComponentFixture<LibBeehiveRGSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibBeehiveRGSharedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibBeehiveRGSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
