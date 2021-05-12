import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent implements OnInit {

  @Input () msg: string
  @Input () tipo: string = 'sucess'

  constructor(
    public modal: BsModalRef
    ) { }

  ngOnInit() {
  }

onClose(){
this.modal.hide()
}
}
