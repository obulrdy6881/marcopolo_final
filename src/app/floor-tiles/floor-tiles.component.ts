import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floor-tiles',
  templateUrl: './floor-tiles.component.html',
  styleUrls: ['./floor-tiles.component.scss']
})
export class FloorTilesComponent implements OnInit {
  showImages: [];
  floor: { name: string; num: string; images: { name: string; num: string; }[]; }[];
  polished:{} [];
  glazed: { }[];
  matt: { }[];
  constructor() { }

  ngOnInit(): void {
    this.floor = [{
      name: "assets/tiles/96006.jpg",
      num: "96006",
      images: [{
        name: "assets/tiles/96006_tile.jpg",
        num: "used interior/kitchen"
      },
      {
        name: "assets/tiles/96006_tile.jpg",
        num: "used interior/kitchen"
      }
      ]

    },
    {
      name: "assets/tiles/96007.jpg",
      num: "96007",
      images: [{
        name: "assets/tiles/96007img.jpg",
        num: "used interior/kitchen"
      },
      {
        name: "assets/tiles/96007img.jpg",
        num: "used interior/kitchen"
      }
      ]
    },
    {
      name: "assets/tiles/96001.jpg",
      num: "96001",
      images: [{
        name: "assets/tiles/96001_tile.jpg",
        num: "used interior/kitchen"
      },
      {
        name: "assets/tiles/96001_tile.jpg",
        num: "used interior/kitchen"
      }
      ]
    },
    {
      name: "assets/tiles/96026.jpg",
      num: "96026",
      images: [{
        name: "assets/tiles/96026_tiles.jpg",
        num: "used interior/kitchen"
      },
      {
        name: "assets/tiles/96026_tiles.jpg",
        num: "used interior/kitchen"
      }
      ]
    },
    {
      name: "assets/tiles/96036.jpg",
      num: "96036",
      images: [{
        name: "assets/tiles/96036_tile.jpg",
        num: "used interior/kitchen"
      },
      {
        name: "assets/tiles/96036_tile.jpg",
        num: "used interior/kitchen"
      }
      ]
    },
    {
      name: "assets/tiles/96014.jpg",
      num: "96014",
      images: [{
        name: "assets/tiles/96014_tile.jpg",
        num: "used interior/kitchen"
      },
      {
        name: "assets/tiles/96014_tile.jpg",
        num: "used interior/kitchen"
      }
      ]
    }
    ],
    this.polished = [{
      name: "assets/tiles/6107.jpg",
      num: "6107",
      images: [{
        name: "assets/tiles/6107_tilesimage.jpg",
        num: "used interior/kitchen"
      },
      {
        name: "assets/tiles/6107_tilesimage.jpg",
        num: "used interior/kitchen"
      }
      ]
    },
    {
      name: "assets/tiles/6122.jpg",
      num: "6122",
      images: [{
        name: "assets/tiles/6122_tileimage.jpg",
        num: "used interior/kitchen"
      },
      {
        name: "assets/tiles/6122_tileimage.jpg",
        num: "used interior/kitchen"
      }
      ]
    },
    {
      name: "assets/tiles/6123.jpg",
      num: "6123",
     images:[{
      name: "assets/tiles/6123_imagetiles.jpg",
      num: "used interior/kitchen"
     },
    {
      name: "assets/tiles/6123_imagetiles.jpg",
      num: "used interior/kitchen"
    }]
    },
    {
      name: "assets/tiles/6817.jpg",
      num: "6817",
      images:[{
        name: "assets/tiles/6817_img.jpg",
        num: "used interior/kitchen"
       },
       {
        name: "assets/tiles/6817_img.jpg",
        num: "#used interior/kitchen"
       }
      ]
    },
    {
      name: "assets/tiles/6902.jpg",
      num: "6902",
      images:[{
        name: "assets/tiles/6902_img.jpg",
        num: "used interior/kitchen"
       },
       {
        name: "assets/tiles/6902_img.jpg",
        num: "used interior/kitchen"
       }
      ]
    },
    {
      name: "assets/tiles/6906.jpg",
      num: "6906",
      images:[{
        name: "assets/tiles/6906_imgtiles.jpg",
        num: "used interior/kitchen"
       },
       {
        name: "assets/tiles/6906_imgtiles.jpg",
        num: "used interior/kitchen"
       }
      ]
    }
    ],
    this.glazed = [{
      name: "assets/tiles/72002.jpg",
      num: "72002",
      images:[{
        name: "assets/tiles/72002_tileimage.jpg",
        num: "exterior/kitchens"
       },
       {
        name: "assets/tiles/72002_tileimage.jpg",
        num: "exterior/kitchens"
       }
      ]

      
      
    },
    {
      name: "assets/tiles/72003.jpg",
      num: "72003",
      images:[{
        name: "assets/tiles/72003_tileimage.jpg",
        num: "exterior/kitchens"
       },
       {
        name: "assets/tiles/72003_tileimage.jpg",
        num: "exterior/kitchens"
       }
      ]
      
    },
    {
      name: "assets/tiles/72004.jpg",
      num: "72004",
      images:[{
        name: "assets/tiles/72004img.jpg",
        num: "exterior/kitchens"
       },
       {
        name: "assets/tiles/72004img.jpg",
        num: "exterior/kitchens"
       }
      ]
    },
    {
      name: "assets/tiles/72006.jpg",
      num: "72006",
      images:[{
        name: "assets/tiles/72006_tileimage.jpg",
        num: "exterior/kitchens"
       },
       {
        name: "assets/tiles/72006_tileimage.jpg",
        num: "exterior/kitchens"
       }
      ]
    },
    {
      name: "assets/tiles/72007.jpg",
      num: "72007",
      images:[{
        name: "assets/tiles/72007_tileimage.jpg",
        num: "exterior/kitchens"
       },
       {
        name: "assets/tiles/72007_tileimage.jpg",
        num: "exterior/kitchens"
       }
      ]
    },
    {
      name: "assets/tiles/72008.jpg",
      num: "72008",
      images:[{
        name: "assets/tiles/72008_tileimage.jpg",
        num: "exterior/kitchens"
       },
       {
        name: "assets/tiles/72008_tileimage.jpg",
        num: "exterior/kitchens"
       }
      ]
    }
    ],
   
    this.matt = [{
      name: "assets/tiles/96014.jpg",
      num: "96014",
      images:[{
        name: "assets/tiles/96014_tile.jpg",
        num: "exterior /bathrooms /kitchens /interior"
       },
       {
        name: "assets/tiles/96014_tile.jpg",
        num: "exterior /bathrooms /kitchens /interior"
       }
      ]
      
    },
    {
      name: "assets/tiles/96019.jpg",
      num: "96019",
      images:[{
        name: "assets/tiles/96019_tiles.jpg",
        num: "exterior /bathrooms /kitchens /interior"
      },
      {
        name: "assets/tiles/96019_tiles.jpg",
        num: "exterior /bathrooms /kitchens /interior"
      }]
    },
    {
      name: "assets/tiles/96029.jpg",
      num: "96029",
      images:[{
        name: "assets/tiles/96029_tiles.jpg",
        num: "exterior /bathrooms /kitchens /interior"
      },
      {
        name: "assets/tiles/96029_tiles.jpg",
        num: "exterior /bathrooms /kitchens /interior"
      }]
    },
    {
      name: "assets/tiles/96016.jpg",
      num: "96016",
      images:[{
        name: "assets/tiles/96016_tiles.jpg",
        num: "exterior /bathrooms /kitchens /interior"
      },
      {
        name: "assets/tiles/96016_tiles.jpg",
        num: "exterior /bathrooms /kitchens /interior"
      }]
    },
    {
      name: "assets/tiles/96035.jpg",
      num: "96035",
      images:[{
        name: "assets/tiles/96035_tiles.jpg",
        num: "exterior /bathrooms /kitchens /interior"
      },
      {
        name: "assets/tiles/96035_tiles.jpg",
        num: "exterior /bathrooms /kitchens /interior"
      }]
    },
    {
      name: "assets/tiles/96025.jpg",
      num: "96025",
      images:[{
        name: "assets/tiles/96025_tiles.jpg",
        num: "exterior /bathrooms /kitchens /interior"
      },
      {
        name: "assets/tiles/96025_tiles.jpg",
        num: "exterior /bathrooms /kitchens /interior"
      }]
    }]
  }
  openImages(item) {
    this.showImages = item.images;
    console.log(this.showImages)
  }
}
