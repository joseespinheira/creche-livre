import { Component, OnInit } from '@angular/core';
import { MatriculaService } from '../../servico/matricula.servico';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog.component';
import { Planos } from '../../modelos/response/planos.response';

@Component({
  selector: 'app-matricula',
  templateUrl: 'matricula.page.html',
  styleUrls: ['matricula.page.css'],
})
export class MatriculaComponent implements OnInit {
  data_pagamento: number = 1;
  nome_mae: string = '';
  data_nascimento: string = '';
  nome_crianca: string = '';
  planosDisponiveis: Planos[] = [];
  plano: number = 0;

  idAlunoSalvo = 0;
  constructor(
    private matriculaService: MatriculaService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.matriculaService.listarPlanos().subscribe((response) => {
      this.planosDisponiveis = response;
    });
  }

  submitForm() {
    const dadosAluno = {
      data_nascimento: this.data_nascimento,
      nome_crianca: this.nome_crianca,
    };

    if(!dadosAluno.data_nascimento || !dadosAluno.nome_crianca)
    this.dialog.open(ConfirmDialogComponent, {
      width: '300px', // Largura do diálogo
      data: {
        titulo: 'Atenção',
        message: 'Preencha os dados!',
      },
    });
    if(dadosAluno.data_nascimento || dadosAluno.nome_crianca)
    // TODO separar a entidade do aluno da entidade do pai/mae
    this.matriculaService.salvarDadosAluno(dadosAluno).subscribe({
      next: (response) => {
        this.idAlunoSalvo = response.id;

        const dadosResponsavel = {
          nome: this.nome_mae,
          alunoId: this.idAlunoSalvo,
          id_tipo_responsavel: 1,
          responsavel_principal: true,
        };

        // todo verificar ser vai ter que add os responsaveis aqui ou se tem outro lugar
        this.matriculaService
          .salvarDadosResponsaveis(dadosResponsavel)
          .subscribe({
            next: () => {
              const dadosMatricula = {
                alunoId: this.idAlunoSalvo,
                data_pagamento: this.data_pagamento,
                data_matricula: new Date(),
                planoId: this.plano,
                crecheId: 1, // TODO alterar para adicionar na creche do usuario logado
              };
              this.matriculaService
                .salvarDadosMatricula(dadosMatricula)
                .subscribe({
                  next: () => {
                    // TODO criar mapeamento da data da mensagem para ficar tipado o objeto
                    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
                      width: '300px', // Largura do diálogo
                      data: {
                        titulo: 'Sucesso',
                        message: 'Registro salvo com sucesso!',
                      },
                    });

                    dialogRef.afterClosed().subscribe(() => {
                      this.router.navigate(['/home']);
                    });
                  },
                });
            },
          });
      },
      error: (error) => {
        this.snackBar.open('Erro ao salvar os dados!', 'Fechar', {
          duration: 3000, // Tempo em milissegundos que o snackbar ficará aberto
        });
        console.error('Erro ao salvar os dados:', error);
      },
    });
  }

  clearForm() {
    this.nome_mae = '';
    this.data_nascimento = '';
    this.nome_crianca = '';
    this.plano = 0;
    this.data_pagamento = 1;
  }
}
