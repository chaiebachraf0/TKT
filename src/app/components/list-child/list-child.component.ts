import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-list-child',
  templateUrl: './list-child.component.html',
  styleUrls: ['./list-child.component.scss']
})
export class ListChildComponent implements OnInit {
  field: any;
  biz: any;
  condition:boolean=false;
  constructor(private genericService: ServiceService,
    private route: ActivatedRoute,
    private router: Router) 
    {
   
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      params['business']?this.field=params['business']:this.field=params['result']
      // this.field = params['business']
      if (params['business'])
      {
this.condition=true
        this.genericService.getGenericById('/biz',this.field).subscribe((result) => {
          this.biz=result
        })
      }
      if(params['result']){
        this.condition=false
        this.genericService.getGenericById('/result',this.field).subscribe((result) => {
          this.biz=result
        })
      }

    })
  }

}
