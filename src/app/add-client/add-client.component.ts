import { Component } from '@angular/core';
import {Client} from "../model/client";
import {ClientsService} from "../clients.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Account} from "../model/account";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent {
  client: Client;
  userForm: FormGroup;
  add: boolean;
  pipe = new DatePipe('en-US');
  constructor(private clientsService: ClientsService,
              private route: ActivatedRoute,
              private router: Router) {
    this.client = this.clientsService.selectedClient;
    this.add = this.clientsService.add;
    if(!this.add){
      this.clientsService.getClientById(this.route.snapshot.params["id"])
        .subscribe(
          (data) => {
            this.clientsService.selectedClient = this.client;
          }
        )
      this.userForm = new FormGroup({
        name: new FormControl(this.client.name,[Validators.required]),
        surname: new FormControl(this.client.surname,[Validators.required]),
        email: new FormControl(this.client.account.email, [Validators.required, Validators.email]),
        password: new FormControl(this.client.account.password,[Validators.required]),
        phone: new FormControl(this.client.phone_number,[Validators.required, Validators.pattern("^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$")]),
        birthdate: new FormControl(this.pipe.transform(this.client.birthdate, 'yyyy-MM-dd'))
      });
    }
    else {
      this.userForm = new FormGroup({
        name: new FormControl('',[Validators.required]),
        surname: new FormControl('',[Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('',[Validators.required]),
        phone: new FormControl('',[Validators.required, Validators.pattern("^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{3}$")]),
        birthdate: new FormControl('', [Validators.required])
      });
    }

  }

  get nameForm(){
    return this.userForm.get('name')
  }

  saveClient(){
    if(this.userForm.valid){
      let form = this.userForm.value;
      if(!this.add){
        let newClient = new Client(this.client.id,form.name, form.surname, form.phone, form.birthdate,this.client.isOnBlacklist,
          new Account(this.client.account.id, form.email, form.password))
        this.clientsService.editClient(newClient);
        alert("Klient pomyślnie edytowany")
        this.router.navigate(["clients"]);
      }
      else{
        let newClient = new Client(0,form.name, form.surname, form.phone, form.birthdate,false,
          new Account(0,form.email, form.password))
        this.clientsService.addClient(newClient);
        alert("Klient pomyślnie dodany")
        this.router.navigate(["clients"]);
      }
    }
  }


  onReturn(){
    if(!this.add){
      this.router.navigate(["clients/"+ this.client.id])
    }
    else{
      this.router.navigate(["clients"]);

    }
    this.clientsService.add = false;
  }

}
