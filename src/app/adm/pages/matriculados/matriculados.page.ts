import { Component, OnInit } from '@angular/core';
import { MatriculaService } from '../../servico/matricula.servico';
import { aluno } from 'src/app/shared/aluno';
import { MatDialog } from '@angular/material/dialog';
import { RegistraPagamentoComponent } from '../../components/registra-pagamento/registra-pagamento';

@Component({
  selector: 'app-matriculados',
  templateUrl: 'matriculados.page.html',
  styleUrls: ['matriculados.page.css'],
})
export class MatriculadosComponent implements OnInit {
  listaMatriculados: aluno[] = [];

  constructor(
    private matriculaService: MatriculaService,
    public dialog: MatDialog
    ) {}

  ngOnInit(): void {
    this.matriculaService.listar().subscribe({
      next: (response: aluno[]) => {
        console.log(response);
        this.listaMatriculados = response;
        this.listaMatriculados.map((aluno)=>{
          // Verificar a situação baseado no dia atual com data de pagamento da matricula
          // com ultimo pagamento ou acordo realizado
          const dataAtual = new Date();
// Posso olhar o ultimo pagamento/acordo realizado e a data atual
// Se o ultimo pagamento foi feito completo 

// **** adicionar uma flag de pendencia no pagamento automaticamente ao pagar se o valor não for o total 
// ou se o pagamento anterior tiver pendencia ( tambem terá que fazer verificacao geral para validade se a pendencia continua
// tbm criar um remover pendencia )

// Se não tiver pendencia no ultimo pagamento então verificar a data de pagamento e a data atual

        })
      },
      error: () => {
        console.log('erro ao recuperar listar');
      },
    });
  }

  // Função para abrir o menu
  openMenu(event: MouseEvent) {
    // this.menuTrigger.openMenu();
    event.stopPropagation(); // Impede que o evento de clique se propague para a linha da tabela
  }

  // Funções para as ações do menu (editar, excluir, etc.)
  editarAluno(id: number) {
    // editar o aluno aqui
  }

  excluirAluno(id: number) {
    // excluir o aluno aqui
  }

  registraPagamento(id:number){
    console.log("Registrando pagamento")

    let aluno = this.listaMatriculados[id];
    const dialogRef = this.dialog.open(RegistraPagamentoComponent, {
      width: '400px', // Defina o tamanho do modal
      data: { id, aluno },
    });
  }
}
