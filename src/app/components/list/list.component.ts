import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  biz: any;
  result: any;
  typeSelected: string;

  constructor(private genericService: ServiceService,) {
    this.typeSelected = 'ball-fussion';

   }

  ngOnInit(): void {

    this.genericService.getCounter('/biz').subscribe((result) => {
        this.biz=result
          })
          this.genericService.getCounter('/result').subscribe((result) => {
            this.result=result
          })
        }
        
  }
  


