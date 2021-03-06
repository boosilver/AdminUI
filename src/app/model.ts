import { Util } from '../util/util';
var todate ;
import { Injectable } from '@angular/core';

const construct = function (constructor, argsArray) {
    

  function F(): void {
    constructor.apply(this, argsArray);
  }
  F.prototype = constructor.prototype;
  return new F();
}

const empty = function (constructor, numArgs: number) {
  todate = Util.todate();
  const nullArgs = new Array(numArgs).fill(null);
  return construct(constructor, nullArgs);
}


// ----------------------------------------- Generate Keypair -------------------------------------------------------------------
export class Generatekeypair {
  static empty(): Generatekeypair {
    const emptyObj =  empty(Generatekeypair, 2);
    return emptyObj;
  }

  static sampleSubmitSr(): Generatekeypair {
    const sample: Generatekeypair = Generatekeypair.empty();
    
    sample.Name = 'lotus';
    sample.STATUS = 'company';

    return sample;
  }

  constructor (
      public STATUS: string,
      public Name: string,
    
  ) {}
}
// ------------------------------------------ END -------------------------------------------------------------------

//  ---------------------------------------------- Check keypair ------------------------------------------------
export class InquireKey {
  static empty(): InquireKey {
    const emptyObj =  empty(InquireKey, 1);
    return emptyObj;
  }

  static sampleSubmitSr(): InquireKey {
    const sample: InquireKey = InquireKey.empty();
 
    sample.ID = 'lotus';

    return sample;
  }

  constructor (
      public ID: string,
  ) {}
}
//  ---------------------------------------------- END key -----------------------------------------------------------
