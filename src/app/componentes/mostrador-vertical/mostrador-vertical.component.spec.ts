import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostradorVerticalComponent } from './mostrador-vertical.component';

describe('MostradorVerticalComponent', () => {
  let component: MostradorVerticalComponent;
  let fixture: ComponentFixture<MostradorVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostradorVerticalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostradorVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
