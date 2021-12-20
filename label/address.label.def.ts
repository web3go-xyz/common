export class AddressLabelTypeDef {
  public static SHO: LabelDef = {
    code: 'SHO',
    name: 'Strong Holder',
    description: 'hold the token for a long time',
  };

  public static HB: LabelDef = {
    code: 'HB',
    name: 'High Balance',
    description: 'with high balance in the walletaddress',
  };

  public static HA: LabelDef = {
    code: 'HA',
    name: 'High Activity',
    description: 'High frequency of activity',
  };

  public static SM: LabelDef = {
    code: 'SM',
    name: 'Smart Money',
    description: 'smart trade to get profit',
  };

  public static BW: LabelDef = {
    code: 'BW',
    name: 'Big Whale',
    description: 'who collect most of the token',
  };

  public static EX: LabelDef = {
    code: 'EX',
    name: 'EXCHANGE',
    description: 'act as EXCHANGE to provide service',
  };
}

export class LabelDef {
  public code: string;
  public name: string;
  public description: string;
}
