import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPeticionesComponent } from './listar-peticiones.component';

describe('ListarPeticionesComponent', () => {
  let component: ListarPeticionesComponent;
  let fixture: ComponentFixture<ListarPeticionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarPeticionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarPeticionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
