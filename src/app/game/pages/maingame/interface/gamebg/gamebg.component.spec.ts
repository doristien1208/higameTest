import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamebgComponent } from './gamebg.component';

describe('GamebgComponent', () => {
  let component: GamebgComponent;
  let fixture: ComponentFixture<GamebgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamebgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamebgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
