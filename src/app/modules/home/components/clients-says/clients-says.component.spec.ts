import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsSaysComponent } from './clients-says.component';

describe('ClientsSaysComponent', () => {
  let component: ClientsSaysComponent;
  let fixture: ComponentFixture<ClientsSaysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsSaysComponent]
    });
    fixture = TestBed.createComponent(ClientsSaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
