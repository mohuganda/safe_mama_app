import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IncidentReportPage } from './incident-report.page';

describe('IncidentReportPage', () => {
  let component: IncidentReportPage;
  let fixture: ComponentFixture<IncidentReportPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IncidentReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
