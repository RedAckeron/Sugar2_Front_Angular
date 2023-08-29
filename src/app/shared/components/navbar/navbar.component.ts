import { TmplAstVariable } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { Customer } from 'src/app/Models/customer';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  FindCustomerForm : FormGroup;
  items!: MenuItem[];
  constructor(private _builder : FormBuilder,private _customerService:CustomerService,private _router : Router)
  {
    //On crée un nouveau formulaire grâce à notre FormBuilder et on le stocke dans notre propriété registerForm
    this.FindCustomerForm = this._builder.group({
      FormFindCustomer : [null, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      IdUserSelected:[]
    })
  }

  ListFindedCustomer!:Customer[];

  C1:Customer=
  {
  id:0,
  firstName:"choisir",
  lastName:"Veuillez",
  email:"",
  call1:"",
  call2:"",
  dtIn: new Date,
  addByUser:0,
  adresses:[]

  };




GetListCustomer()
  {
    if(this.FindCustomerForm.controls['FormFindCustomer'].value!="")
    {
    this._customerService.FindCustomers(this.FindCustomerForm.controls['FormFindCustomer'].value).subscribe((data)=>{
      data.unshift(this.C1);
    this.ListFindedCustomer=data;
    this.FindCustomerForm.get("IdUserSelected")?.setValue(this.ListFindedCustomer[0].id);
    });
    }
    else
    {
    //si la case de recherche est vide on vide le tableau de recherche
      this.ListFindedCustomer=[];
    }
  }

  showcustomer()
  {
    console.log(this.FindCustomerForm.controls['IdUserSelected'].value);

    if(this.FindCustomerForm.controls['IdUserSelected'].value != '0')
    {
      this._router.routeReuseStrategy.shouldReuseRoute = () => false;
      this._router.onSameUrlNavigation = 'reload';
      this._router.navigate(['customer/show/',this.FindCustomerForm.controls['IdUserSelected'].value]);
    }
  }

logout()
  {
    localStorage.removeItem("IdUser");
    this._router.navigate(["/home"]);
  }

  ngOnInit() {

      this.items = [
        {
          label: 'Client',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'List', icon: 'pi pi-fw pi-trash', routerLink: ['/customer/list']},
              {label: 'Add', icon: 'pi pi-fw pi-refresh', routerLink: ['/customer/add']}
          ]
        },
        {
            label: 'Offre de prix',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
            ]
        },
        {
            label: 'Bon de commande',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
            ]
        },
        {
            label: 'Facture',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
            ]
        },
        {
            label: 'Repair',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
            ]
        },
        {
            label: 'Dlc',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
            ]
        },
        {
          label: 'Article',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'List', icon: 'pi pi-fw pi-trash'},
              {label: 'Add', icon: 'pi pi-fw pi-refresh'}
          ]
      },
        {label: 'Admin', icon: 'pi pi-download', routerLink: ['/pagename']},
        {label: 'Logout', icon: 'pi pi-download',command:(event)=>{this.logout();} },
      ];


  }
}


//this._customerService.ReadLastCustomers("j").subscribe((data)=>this.Customers=data);
