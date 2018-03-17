import {Type, Expose} from 'class-transformer';

export class College {
  @Expose( { name : 'PartitionKey'})
  partitionKey: string;
  @Expose( { name : 'RowKey'})
  rowKey: string;
  @Type(() => Date)
  @Expose( { name : 'Timestamp'})
  timestamp: Date;
  entityid: string;
  @Expose({ name : 'numero_immatriculation_uai' })
  numeroImmat: string;
  @Expose({name: 'college'})
  nom: string;
  @Expose({ name : 'nom_de_la_voie_du_college'})
  nomVoie : string;
  @Expose({name : 'code_postal_college'})
  codePostal : number;
  commune: string;
  @Expose({ name : 'nouveau_canton_2015'})
  nouveauCanton: string;
  }
