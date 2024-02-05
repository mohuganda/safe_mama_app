import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResourceListPage } from './resource-list.page';

describe('ResourceListPage', () => {
  let component: ResourceListPage;
  let fixture: ComponentFixture<ResourceListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResourceListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
