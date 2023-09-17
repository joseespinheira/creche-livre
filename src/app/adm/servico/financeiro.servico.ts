import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FinanceiroService {
  private apiUrl = environment.url; // Substitua pela URL real do seu backend

  constructor(private http: HttpClient) { }

  // salvarDadosAluno(dados: any): Observable<any> {
  //   return this.http.post(`${this.apiUrl}aluno`, dados);
  // }

  // salvarDadosResponsaveis(dados: any): Observable<any> {
  //   return this.http.post(`${this.apiUrl}responsavel`, dados);
  // }

  // salvarDadosMatricula(dados: any): Observable<any> {
  //   return this.http.post(`${this.apiUrl}matricula`, dados);
  // }

  // litarResponsavel(idAluno: number):Observable<any>{
  //   return this.http.get(`${this.apiUrl}responsavel&id_aluno=${idAluno}`)
  // }

  // litarMatricula(idAluno: number):Observable<any>{
  //   return this.http.get(`${this.apiUrl}matricula&id_aluno=${idAluno}`)
  // }

  // listar(): Observable<any> {
  //   return this.http.get(`${this.apiUrl}aluno?_embed=responsavel&_embed=matricula`);
  // }

  // listarPlanos(): Observable<any> {
  //   return this.http.get(`${this.apiUrl}plano`);
  // }

  // registrarPagamento(data:any):Observable<any>{
  //   return this.http.post(`${this.apiUrl}pagamento`, data);
  // }

  
  listarMovimentacoes(): Observable<any> {
    return this.http.get(`${this.apiUrl}pagamento`);
  }
  
  filtrarMovimentacoes(request:any): Observable<any> {
    let filtro = '';
    if(request.situacao)
      filtro = '&id='+request.situacao

    return this.http.get(`${this.apiUrl}situacao?_embed=pagamento${filtro}`);
  }

  pegarIdAlunosPorNome(nome: string){
    return this.http.get(`${this.apiUrl}aluno?nome_crianca_like=${nome}`);
  }
}