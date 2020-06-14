import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  pictures: { name: string; num: string; images: { name: string; num: string; }[]; }[];
  showImages: any;

  constructor() { }

  ngOnInit(): void {
    this.pictures = [{
      name: "assets/tiles/2006.jpg",
      num: "#2006",
      images: [{
        name: "assets/tiles/2006_tile.jpg",
        num: "#2006"
      },
      {
        name: "assets/tiles/2006_tile.jpg",
        num: "#2006"
      }
      ]
    },
    {
      name: "assets/tiles/2007.jpg",
      num: "#2007",
      images: [{
        name: "assets/tiles/2007_tile.jpg",
        num: "#2007"
      },
      {
        name: "assets/tiles/2007_tile.jpg",
        num: "#2007"
      }
      ]
    },
    {
      name: "assets/tiles/2001.jpg",
      num: "#2001",
      images: [{
        name: "assets/tiles/2001_tile image.jpg",
        num: "#2001"
      },
      {
        name: "assets/tiles/2001_tile image.jpg",
        num: "#2001"
      }
      ]
    },
    {
      name: "assets/tiles/2002.jpg",
      num: "#2002",
      images: [{
        name: "assets/tiles/2002_tile.jpg",
        num: "#2002"
      },
      {
        name: "assets/tiles/2002_tile.jpg",
        num: "#2006"
      }
      ]
    },
    {
      name: "assets/tiles/2005.jpg",
      num: "#2005",
      images: [{
        name: "assets/tiles/2005_walltile.jpg",
        num: "#2005"
      },
      {
        name: "assets/tiles/2005_walltile.jpg",
        num: "#2005"
      }
      ]
    },
    {
      name: "assets/tiles/2004.jpg",
      num: "#2004",
      images: [{
        name: "assets/tiles/2004_tile.jpg",
        num: "#2004"
      },
      {
        name: "assets/tiles/2004_tile.jpg",
        num: "#2004"
      }
      ]
    }
    ]
  }
  openImages(item) {
    this.showImages = item.images;
    console.log(this.showImages)
  }
}
