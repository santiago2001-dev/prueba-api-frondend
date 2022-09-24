import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescifrarComponent } from './descifrar.component';

describe('DescifrarComponent', () => {
  let component: DescifrarComponent;
  let fixture: ComponentFixture<DescifrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescifrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescifrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
