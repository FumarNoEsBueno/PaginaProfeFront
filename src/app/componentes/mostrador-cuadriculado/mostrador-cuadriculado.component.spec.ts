import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostradorCuadriculadoComponent } from './mostrador-cuadriculado.component';

describe('MostradorCuadriculadoComponent', () => {
  let component: MostradorCuadriculadoComponent;
  let fixture: ComponentFixture<MostradorCuadriculadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostradorCuadriculadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostradorCuadriculadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
