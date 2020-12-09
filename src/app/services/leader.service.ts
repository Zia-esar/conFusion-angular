import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { Leaders } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Promise<Leader[]>{
    return Promise.resolve(Leaders);
  }

  // getLeader(): Promise<Leader>{
  //   return Promise.resolve(Leaders.filter(item => item.featured)[0]);
  // }

  getLeader(): Promise<Leader>{
    return Promise.resolve(Leaders[0]);
  }
}
