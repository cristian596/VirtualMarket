import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Artesanal } from './artesanal';

describe('Artesanal', () => {
  let component: Artesanal;
  let fixture: ComponentFixture<Artesanal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Artesanal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Artesanal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
