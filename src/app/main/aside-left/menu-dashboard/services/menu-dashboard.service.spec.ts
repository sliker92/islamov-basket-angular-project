import { TestBed } from '@angular/core/testing';

import { MenuDashboardService } from './menu-dashboard.service';

describe('MenuDashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuDashboardService = TestBed.get(MenuDashboardService);
    expect(service).toBeTruthy();
  });
});
