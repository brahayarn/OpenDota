export type Hero = {
  id: number;
  name: string; 
  localized_name: string; 
  primary_attr: 'str' | 'agi' | 'int';
  attack_type: 'Melee' | 'Ranged';
  roles: string[];
  img?: string; 
  icon?: string;
  move_speed?: number;
  legs?: number;
};
export type HeroDetails = Hero & {
  base_str: number;
  base_agi: number;
  base_int: number;
  str_gain: number;
  agi_gain: number;
  int_gain: number;
  base_attack_min: number;
  base_attack_max: number;
  attack_rate: number;
  armor: number;
  attack_range: number;
  day_vision: number;
  night_vision: number;
  abilities?: Record<string, any>; 
};
