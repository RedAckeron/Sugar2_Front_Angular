import { TmplAstVariable } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { Customer } from 'src/app/models/CustomerModel';
import { AuthService } from 'src/app/Services/auth.service';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  FindCustomerForm : FormGroup;
  items!: MenuItem[];
  private _isConnected! : Boolean;

  get isConnected()
  {
    return this._isConnected;
  }


  constructor(private _builder : FormBuilder,private _customerService:CustomerService,private _router : Router,private _authService:AuthService)
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
    //console.log(this.FindCustomerForm.controls['IdUserSelected'].value);

    if(this.FindCustomerForm.controls['IdUserSelected'].value != '0')
    {
      this._router.routeReuseStrategy.shouldReuseRoute = () => false;
      this._router.onSameUrlNavigation = 'reload';
      this._router.navigate(['customer/show/',this.FindCustomerForm.controls['IdUserSelected'].value]);
    }
  }

logout()
  {
    this._authService.logout();
  }

  ngOnInit() {
    //recuperation de observable is connected
    this._authService.IsConnected.subscribe({
      next: (value : Boolean) =>
      {
        console.log("new value : " + value)
        this._isConnected=value
      }});

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
            label: 'Consultation',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {label: 'Offre de prix', icon: 'pi pi-fw pi-trash',routerLink: ['/odp/list']},
                {label: 'Bon de commande', icon: 'pi pi-fw pi-trash',routerLink: ['/cmd/list']},
                {label: 'Facture', icon: 'pi pi-fw pi-trash',routerLink: ['/fct/list']},
                {label: 'Repair', icon: 'pi pi-fw pi-trash',routerLink: ['/rpr/list']},
                {label: 'Download content', icon: 'pi pi-fw pi-trash',routerLink: ['/dlc/list']},
                {label: 'Articles', icon: 'pi pi-fw pi-refresh',routerLink: ['/item/list']}
            ]
      },
        {label: 'Admin', icon: 'pi pi-download', routerLink: ['/home']},
        {label: 'Logout', icon: 'pi pi-download',command:(event)=>{this.logout();} },
      ];


  }
}


//this._customerService.ReadLastCustomers("j").subscribe((data)=>this.Customers=data);
