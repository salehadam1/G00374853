import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SciencePage } from './science.page';

describe('SciencePage', () => {
  let component: SciencePage;
  let fixture: ComponentFixture<SciencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SciencePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SciencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
