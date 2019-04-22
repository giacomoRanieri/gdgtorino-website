import { Asset, Entry, IAsset, IEntry, ILink, isAsset, ISys } from "../base";

export interface IGdgFields {
  location?: string;
  logo?: ILink<'Asset'> | IAsset;
  description?: string;
  abstract?: string;
}

/**
 * GDG
 */
export interface IGdg extends IEntry<IGdgFields> {
}

export function isGdg(entry: IEntry<any>): entry is IGdg {
  return entry &&
    entry.sys &&
    entry.sys.contentType &&
    entry.sys.contentType.sys &&
    entry.sys.contentType.sys.id == 'gdg'
}

export class Gdg extends Entry<IGdgFields> implements IGdg {
  public readonly sys!: ISys<'Entry'>;
  public readonly fields!: IGdgFields;

  get location(): string | undefined {
    return this.fields.location
  }

  get logo(): Asset | null | undefined {
    return !this.fields.logo ? undefined :
      (isAsset(this.fields.logo) ? new Asset(this.fields.logo) : null)
  }

  get description(): string | undefined {
    return this.fields.description
  }

  get abstract(): string | undefined {
    return this.fields.abstract
  }

  constructor(entry: IGdg);
  constructor(id: string, fields: IGdgFields);
  constructor(entryOrId: IGdg | string, fields?: IGdgFields) {
    super(entryOrId, 'gdg', fields)
  }
}
