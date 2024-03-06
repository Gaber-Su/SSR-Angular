import { isPlatformServer } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, makeStateKey } from '@angular/core';
import { TransferState } from '@angular/platform-browser';
import { ApihandlerService } from 'src/app/services/apihandler.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  apiData: any[] = []
  platformId!: Object
  constructor(private apiHandler: ApihandlerService, @Inject(PLATFORM_ID) platformId: Object, private transferState: TransferState) {
    this.platformId = platformId
    console.log(this.platformId);

  }

  ngOnInit() {
    // if (this.transferState.hasKey(makeStateKey('posts')))
    //   this.apiData = this.transferState.get(makeStateKey('posts'), []);
    // else
    this.getData()
  }
  getData() {
    this.apiHandler.fetchDataFromApi()
      .subscribe((data: any) => {
        // if (isPlatformServer(this.platformId)) {
        //   this.transferState.set<any>(makeStateKey('posts'), data)
        // }

        this.apiData = data


        // console.log(data);


      })
  }

}
