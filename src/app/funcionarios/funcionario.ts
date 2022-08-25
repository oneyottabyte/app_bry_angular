import { Empresa } from "../empresas/empresa";

export interface Funcionario {
  id: number;
  login: string;
  nome: string;
  cpf: string;
  email: string;
  endereco: string;
  created_at: Date;
  updated_at: Date;
  empresas: any;
}
