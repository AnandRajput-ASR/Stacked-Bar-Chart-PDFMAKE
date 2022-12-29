import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class DataService {
  constructor() {}

  getSales() {
    return of({
      January: {
        Failure_Device_ID: '0',
        Failure_Endorsement_Key: '0',
        Failure_Registration_ID: '0',
        Successful:'0',
      },
      February: {
        Failure_Device_ID: '0',
        Failure_Endorsement_Key: '0',
        Failure_Registration_ID: '0',
        Successful:'0',
      },
      March: {
        Failure_Device_ID: '0',
        Failure_Endorsement_Key: '0',
        Failure_Registration_ID: '0',
        Successful:'0',
      },
      April: {
        Failure_Device_ID: '0',
        Failure_Endorsement_Key: '1',
        Failure_Registration_ID: '17',
        Successful:'15',
      },
      May: {
        Failure_Device_ID: '0',
        Failure_Endorsement_Key: '0',
        Failure_Registration_ID: '0',
        Successful:'0',
      },
      June: {
        Failure_Device_ID: '0',
        Failure_Endorsement_Key: '0',
        Failure_Registration_ID: '0',
        Successful:'0',
      },
      July: {
        Failure_Device_ID: '0',
        Failure_Endorsement_Key: '0',
        Failure_Registration_ID: '3',
        Successful:'3',
      },
      August: {
        Failure_Device_ID: '33',
        Failure_Endorsement_Key: '72',
        Failure_Registration_ID: '38',
        Successful:'24',
      },
      September: {
        Failure_Device_ID: '456',
        Failure_Endorsement_Key: '465',
        Failure_Registration_ID: '512',
        Successful:'395',
      },
      October: {
        Failure_Device_ID: '189',
        Failure_Endorsement_Key: '208',
        Failure_Registration_ID: '204',
        Successful:'71',
      },
      November: {
        Failure_Device_ID: '48',
        Failure_Endorsement_Key: '54',
        Failure_Registration_ID: '53',
        Successful:'25',
      },
      // Decmeber: {
      //   Failure_Device_ID: '1.55',
      //   Failure_Endorsement_Key: '7.53',
      //   Failure_Registration_ID: '0',
      //   Successful:'0',
      // },
    });
  }
}
