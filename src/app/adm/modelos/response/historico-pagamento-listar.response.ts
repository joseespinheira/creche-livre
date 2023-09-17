import { SituacaoPagamento } from "src/app/shared/situacaoEnum";

export interface HistoricoPagamentoListar {
    id: number;
    alunoId: number;
    data_pagamento: Date | string;
    observacao: string;
    situacaoId: SituacaoPagamento;
    valor_pagamento: number;
}