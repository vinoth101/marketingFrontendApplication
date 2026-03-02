import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluencerPage } from './influencer-page';

describe('InfluencerPage', () => {
  let component: InfluencerPage;
  let fixture: ComponentFixture<InfluencerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfluencerPage]
    }).compileComponents();

    fixture = TestBed.createComponent(InfluencerPage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});