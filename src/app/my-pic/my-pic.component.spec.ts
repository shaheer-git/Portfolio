import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPicComponent } from './my-pic.component';

describe('MyPicComponent', () => {
  let component: MyPicComponent;
  let fixture: ComponentFixture<MyPicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyPicComponent]
    });
    fixture = TestBed.createComponent(MyPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
