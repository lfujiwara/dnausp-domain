export type TEndereco = {
  logradouro: string;
  complemento: string;
  municipio: string;
  bairro: string;
  uf: string;
  cep: string;
  numero: number;
};

export type TVinculoPessoaUSP = {
  tipo: string;
  nusp?: string;
  organizacao?: string;
};

export type TSocio = {
  nome: string;
  email: string;
  telefone: string;
  cargo: string;
  vinculos: TVinculoPessoaUSP[];
};

export type TInfoEmpresa = {
  anoFiscal: number;
  nomeFantasia: string;
  razaoSocial: string;
  cnpj: string;
  tipoDeEmpresa: string;
  CNAEPrincipal: string;
  CNAESecundarios: string[];
  porte: string;
  dataDeAbertura: string;
  naturezaJuridica: string;
  endereco: string;
  email: string;
  telefone: string;
  situacaoCadastral: {
    tipo: string;
    data: string;
  };
};

export type TInvestimento = {
  tipo: string;
  valor?: number;
  ano?: number;
};

export type TFaturamento = {
  valor?: number;
  anoFiscal: number;
};

export type TInfoSocial = {
  anoFiscal: number;
  numeroDeFuncionarios: number;
  numeroDeSocios: number;
};

export type TInfoNegocio = {
  tecnologias: string[];
  descricao?: string;
  produtos: string[];
};

export type TMidiaSocial = {
  name: string;
  url: string;
};

export type TContato = {
  email?: string;
  site?: string;
  telefone?: string;
};

export type TIncubacao = {
  incubadora: string;
  estagio: string;
};

export type TContatoPessoa = {
  nome: string;
}

export type TAutorizacao = {
  publicar: boolean;
  autorizador: TContatoPessoa;
  data: string;
}

export type TEmpresa = {
  info: TInfoEmpresa[];
  infoSocial: TInfoSocial[];
  infoNegocio: TInfoNegocio;
  midiasSociais: TMidiaSocial[];
  contato: TContato;
  socios: TSocio[];
  incubacoes: TIncubacao[];
  faturamentos: TFaturamento[];
  investimentosRecebidos: TInvestimento[];
  autorizacoes: TAutorizacao[];
  logoURL?: string;
};
