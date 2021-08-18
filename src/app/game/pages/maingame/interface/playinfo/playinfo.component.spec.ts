import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayinfoComponent } from './playinfo.component';

describe('PlayinfoComponent', () => {
  let component: PlayinfoComponent;
  let fixture: ComponentFixture<PlayinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
