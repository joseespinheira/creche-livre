import { DecimalPipe } from '@angular/common';
import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatriculaService } from '../../servico/matricula.servico';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog.component';

@Component({
  selector: 'app-registra-pagamento',
  templateUrl: './registra-pagamento.html',
  styleUrls: [],
})
export class RegistraPagamentoComponent implements OnInit {
    dataPagamento: string = "";
    valorPago: string = "";
    observacao: string = "";
    amount: number = 19101910.32;
    constructor(
        public dialogRef: MatDialogRef<RegistraPagamentoComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,        private dialog: MatDialog,

    private matriculaService: MatriculaService,
    ) {}
    
    ngOnInit(): void {
        console.log(this.data.aluno)
    }

    onSubmit() {
        const data = {
            alunoId: this.data.id,
            id_creche: 1, // TODO altera para colocar na creche do usuario logado
            data_pagamento: this.dataPagamento,
            valor_pagamento: this.valorPago,
            situacao: 2,
            observacao: this.observacao
        }

        // TODO fazer as validacoes depois

        this.matriculaService.registrarPagamento(data).subscribe(()=>{
            const modalConfirma = this.dialog.open(ConfirmDialogComponent, {
                width: '300px', // Largura do diálogo
                data: {
                  titulo: 'Sucesso',
                  message: 'Registro salvo com sucesso!',
                },
              });

              modalConfirma.afterClosed().subscribe(() => {
                this.dialogRef.close();
              });
        })
    }

}
