import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef, HostListener } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { MdbTableDirective, MdbTablePaginationComponent } from 'angular-bootstrap-md';
import { CommonService } from 'src/app/Providers/common.service';
import { APIURL } from '../../Url';
import { EncrDecrService } from 'src/app/Providers/encr-decr.service'
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
declare var $: any;


@Component({
  selector: 'app-view-tiles',
  templateUrl: './view-tiles.component.html',
  styleUrls: ['./view-tiles.component.scss']
})
export class ViewTilesComponent implements OnInit {
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild('row', { static: true }) row: ElementRef;
  searchText: string = '';
  previous: string;
  maxVisibleItems: number = 10;

  @HostListener('input') oninput() {
    this.mdbTablePagination.searchText = this.searchText;
  }
  searchItems() {
    const prev = this.mdbTable.getDataSource();
    if (!this.searchText) {
      this.mdbTable.setDataSource(this.previous);
      this.elements = this.mdbTable.getDataSource();
    }
    if (this.searchText) {
      this.elements = this.mdbTable.searchLocalDataBy(this.searchText);
      this.mdbTable.setDataSource(prev);
    }
    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.mdbTable.searchDataObservable(this.searchText).subscribe(() => {
      this.mdbTablePagination.calculateFirstItemIndex();
      this.mdbTablePagination.calculateLastItemIndex();
    });
  }



  // editable code
  elements: any = [];
  headElements = ['S_no', 'Tile Type', 'Tile Name', 'Tile Image', 'Price'];
  Filters = {
    CategoryId: null
  }


  TilesList = [];

  Payload = {
    TileId: null,
    TileNumber: null,
    TileName: "",
    About: "",
    Image: "",
    Price: null
  }

  DeleteRecord;
  DeletePopTitle = "";
  RelatedTiles = [];



  constructor(private cdRef: ChangeDetectorRef,
    private CommonService: CommonService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private http: HttpClient,) { }

  ngOnInit() {
    this.getCategorys();
  }

  getCategorys() {
    let url = APIURL.GET_TILES;
    this.CommonService.postMethod(url, {})
      .then((response: Data) => {
        console.log("GET_TILES == >", response);
        if (response.status == 200) {
          this.elements = response.data;
          this.elements.forEach((x, index) => {
            x.S_no = index + 1;
          });

          this.mdbTable.setDataSource(this.elements);
          this.elements = this.mdbTable.getDataSource();
          this.previous = this.mdbTable.getDataSource();

        } else {
          this.toastr.error(response.message, 'Error !')
        }
      })
  }

  getRelatedTiles() {
    let url = APIURL.GET_RELATED_TILES;
    this.CommonService.postMethod(url, { TileId: this.Payload.TileId })
      .then((response: Data) => {
        console.log("GET_TILES == >", response);
        if (response.status == 200) {
          this.RelatedTiles = response.data;

        } else {
          this.toastr.error(response.message, 'Error !')
        }
      })
  }



  SelectEditRecord(item, edit) {
    this.Payload = {
      TileId: item.TileId,
      TileNumber: item.TileNumber,
      TileName: item.TileName,
      About: item.About,
      Image: item.Image,
      Price: item.Price,
    }
    if (edit != 'edit') {
      this.getRelatedTiles()
    }
  }


  UpdateItem(files: FileList) {
    console.log(this.Payload)

    const formData: any = new FormData();
    if (files.length != 0) {
      formData.append("Image", files[0], files[0]['name']);
    } else {
      formData.append("Image", this.Payload.Image);
    }

    formData.append("TileId", this.Payload.TileId);
    formData.append("TileNumber", this.Payload.TileNumber);
    formData.append("TileName", this.Payload.TileName);
    formData.append("About", this.Payload.About);
    formData.append("Price", this.Payload.Price);

    let url = APIURL.UPDATE_TILES_BY_TILEID;
    this.http.post(url, formData).subscribe((response: Data) => {
      console.log("UPDATE_TILES_BY_TILEID == >", response);
      if (response.status == 200) {
        this.toastr.success(response.message, 'Success !');
        // this.Payload = {
        //   TileType: "",
        //   TileNumber: "",
        //   TileName: "",
        //   About: "",
        //   Image: "",
        //   Price: null,
        // }
        this.getCategorys();
      } else {
        this.toastr.error(response.message, 'Error !')
      }
    })
  }



  SelectDeleteRecord(item) {
    this.DeleteRecord = item;
    this.DeletePopTitle = item.TileName;
  }


  DeleteItem() {
    var obj = {
      TileId: this.DeleteRecord.TileId
    }
    var url = APIURL.DELETE_TILE_BY_TILEID;
    this.CommonService.postMethod(url, obj)
      .then((response) => {
        console.log(response)
        if (response.status == 200) {
          this.toastr.success(response.message, 'Success !');
          this.getCategorys();
        } else {
          this.toastr.error(response.message, 'Error !')
        }
      })
  }




  AddRelatedTiles(files: FileList) {
    const formData: any = new FormData();
    if (files.length == 0) {
      this.toastr.error("Please select the image file", 'Error !');
      return 
    } else {
      formData.append("Image", files[0], files[0]['name']);
    }
    formData.append("TileId", this.Payload.TileId);

    let url = APIURL.UPLOAD_SUB_TILES;
    this.http.post(url, formData).subscribe((response: Data) => {
      console.log("UPLOAD_SUB_TILES == >", response);
      if (response.status == 200) {
        this.toastr.success(response.message, 'Success !');

        this.getRelatedTiles();
      } else {
        this.toastr.error(response.message, 'Error !')
      }
    })
  }


deleteRelatedItem(item){
  var obj = {
    SubTileId: item.SubTileId
  }
  var url = APIURL.DELETE_RELATED_TILE;
  this.CommonService.postMethod(url, obj)
    .then((response) => {
      console.log(response)
      if (response.status == 200) {
        this.toastr.success(response.message, 'Success !');
        this.getRelatedTiles();
      } else {
        this.toastr.error(response.message, 'Error !')
      }
    })
}






}
