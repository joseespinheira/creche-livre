import { Component, OnInit } from '@angular/core';
import { FinanceiroService } from '../../servico/financeiro.servico';
import { MatDialog } from '@angular/material/dialog';
import { HistoricoPagamentoListar } from '../../modelos/response/historico-pagamento-listar.response';
import { SituacaoPagamento } from 'src/app/shared/situacaoEnum';
import { switchMap } from 'rxjs';

interface requestFiltrar {
  situacao: string;
  alunoId: number[];
}
@Component({
  selector: 'app-historico-pagamentos',
  templateUrl: 'historico-pagamentos.html',
  styleUrls: [],
})
export class HistoricoPagamentoComponent implements OnInit {
  movimentacoes: HistoricoPagamentoListar[] = [];
  filtroAluno = '';
  filtroSituacao = '';
  filtroPeriodoInicio = '';
  filtroPeriodoFim = '';
  situacaoEnum: SituacaoPagamento[] = [];
  situacoes = Object.values(SituacaoPagamento)
    .filter((key) => !isNaN(Number(key)))
    .map((item) => {
      return { chave: item, valor: SituacaoPagamento[Number(item)] };
    });

  alunos: any = [];

  constructor(
    private financeiroService: FinanceiroService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.financeiroService
      .pegarIdAlunosPorNome('')
      .pipe(
        switchMap((response: any) => {
          this.alunos = response;
          console.log(response);
          return this.financeiroService.listarMovimentacoes();
        })
      )
      .subscribe({
        next: (response: HistoricoPagamentoListar[]) => {
          console.log(response);
          this.movimentacoes = response;
        },
        error: () => {
          console.log('erro ao recuperar listar');
        },
      });
  }

  filtrar() {
    this.movimentacoes = [];
    let alunoId;

    const request: requestFiltrar = {
      situacao: this.filtroSituacao,
      alunoId: [],
    };

    this.financeiroService
      .pegarIdAlunosPorNome(this.filtroAluno)
      .pipe(
        switchMap((response: any) => {
          if (response) {
            request.alunoId = response.map((i: any) => i.id);
          }

          return this.financeiroService.filtrarMovimentacoes(request);
        })
      )
      .subscribe({
        next: (response: any) => {
          console.log({ request });
          if (response) {
            response.forEach((item: any) => {
              this.movimentacoes = this.movimentacoes.concat(item.pagamento);
            });
            console.log(this.movimentacoes);
            this.movimentacoes = this.movimentacoes.filter(
              (i: HistoricoPagamentoListar) =>
                request.alunoId.includes(i.alunoId)
            ).sort((a:any,b:any)=>{return a.id-b.id});
          }
        },
        error: () => {
          console.log('erro ao recuperar listar');
        },
      });
  }

  getNomeCrianca(id:number):string{

    let aluno = this.alunos.find((i:any)=>i.id==id)
    // alunos[movimento.alunoId].nome_crianca
    return aluno.nome_crianca
  }
}
