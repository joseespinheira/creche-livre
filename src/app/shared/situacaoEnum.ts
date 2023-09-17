import { Pipe, PipeTransform } from '@angular/core';

export enum SituacaoPagamento {
  Pendente = 1,
  Pago = 2,
  Parcial = 3,
  Acordo = 4,
}

const situacaoPagamentoInfo: { [id: number]: string } = {
  [SituacaoPagamento.Pendente]: 'Pendente',
  [SituacaoPagamento.Pago]: 'Pago',
  [SituacaoPagamento.Parcial]: 'Parcial',
  [SituacaoPagamento.Acordo]: 'Acordo',
};

@Pipe({
  name: 'descricaoSituacaoPagamento'
})
export class DescricaoSituacaoPagamentoPipe implements PipeTransform {
  transform(id: SituacaoPagamento): string {
    return situacaoPagamentoInfo[id] || 'Desconhecido';
  }
}