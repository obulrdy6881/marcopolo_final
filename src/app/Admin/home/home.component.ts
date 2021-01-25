import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { CommonService } from 'src/app/Providers/common.service'
import { EncrDecrService } from 'src/app/Providers/encr-decr.service'
import { APIURL } from '../../Url';
import { ToastrService } from 'ngx-toastr';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // userInfo: any;
  // Roles: {
  //   admin: number; student: number; mentor: number; school: number;
  // };




  constructor(private CommonService: CommonService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private EncrDecr: EncrDecrService,
  ) {
    // this.Roles = this.CommonService.getRoles();
    // this.userInfo = this.CommonService.getuserInfo();

    // if (this.userInfo.Role != this.Roles.admin) {
    //   this.router.navigate['/'];
    // }

    // console.log(this.userInfo)
  }
  ngOnInit(): void {

    if (window.innerWidth > 1400) {
      $(".navbarToggle").addClass("ShowToggle");
    }

    $("#Sidenavtogglebutton").click(function () {
      $(".navbarToggle").toggleClass("ShowToggle");
    });

  }

  Routs = [
    {
      title: "Tiles", path: "", icon: "fa fa-border-all", subitems: [
        { title: "Add Tiles", path: "/admin/add-tile", icon: "fa fa-plus-circle", subitems: [] },
        { title: "View Tiles", path: "/admin/view-tiles", icon: "fa fa-list", subitems: [] }
      ]
    },

  ]



  logout() {
    // localStorage.removeItem('userInfo');
    // localStorage.removeItem('token');
    this.router.navigate(['/']);
  }


}
