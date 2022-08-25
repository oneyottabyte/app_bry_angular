import { Funcionario } from "../funcionarios/funcionario";

export interface Empresa {
  id: number;
  nome: string;
  cnpj: string;
  endereco: string;
  created_at: Date;
  updated_at: Date;
  funcionarios: any;
}
