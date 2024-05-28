import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPeticionComponent } from './editar-peticion.component';

describe('EditarPeticionComponent', () => {
  let component: EditarPeticionComponent;
  let fixture: ComponentFixture<EditarPeticionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarPeticionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarPeticionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
