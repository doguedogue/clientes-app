import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  listaClientes: Cliente[];

  constructor(private clienteService:ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(
      clientes => this.listaClientes = clientes
    );
  }

  delete(cliente: Cliente): void{

    swal.fire({
      title: 'Estas seguro?',
      text: `¿Seguro que desea eliminar al cliente ${cliente.nombre} ${cliente.apellido}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      reverseButtons: true
    }).then(
      (result) => {
        if (result.value) {
          this.clienteService.delete(cliente.id).subscribe(
            response => {
              this.listaClientes = this.listaClientes.filter(
                cli => cli != cliente
              )

              swal.fire(
                'Cliente Eliminado',
                `Cliente ${cliente.nombre} eliminado con éxito!`,
                'success');
            }
          );
        }
      }
    );
  }

}
