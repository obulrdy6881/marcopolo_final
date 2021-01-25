import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
declare var $: any;
import { CommonService } from 'src/app/Providers/common.service'
import { APIURL } from '../../Url'

@Component({
  selector: 'app-add-tiles',
  templateUrl: './add-tiles.component.html',
  styleUrls: ['./add-tiles.component.scss']
})
export class AddTilesComponent implements OnInit {
  payload = {
    TileType: "",
    TileNumber: "",
    TileName: "",
    About: "",
    Image: "",
    Price: null,
  }

  constructor(private CommonService: CommonService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private http: HttpClient,
  ) {
  }

  ngOnInit(): void {
  }

  Uploadpayload(files: FileList) {
    console.log(this.payload)

    console.log(files);
    const formData: any = new FormData();
    formData.append("Image", files[0], files[0]['name']);
    formData.append("TileType", this.payload.TileType);
    formData.append("TileNumber", this.payload.TileNumber);
    formData.append("TileName", this.payload.TileName);
    formData.append("About", this.payload.About);
    formData.append("Price", this.payload.Price);

    let url = APIURL.UPLOAD_TILES;
    this.http.post(url, formData).subscribe((response: Data) => {
        console.log("UPLOAD_TILES == >", response);
        if (response.status == 200) {
          this.toastr.success(response.message, 'Success !');
          // this.payload = {
          //   TileType: "",
          //   TileNumber: "",
          //   TileName: "",
          //   About: "",
          //   Image: "",
          //   Price: null,
          // }
        } else {
          this.toastr.error(response.message, 'Error !')
        }
      })
  }



}
