import { TestBed } from '@angular/core/testing';

import { IniciarusuarioService } from './iniciarusuario.service';

describe('IniciarusuarioService', () => {
  let service: IniciarusuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IniciarusuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
