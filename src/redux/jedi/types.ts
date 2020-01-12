export interface IJediState {
  jedi: Array<IJedi>;
  error: any;
}

export type IJedi = {
  id: number;
  name: string;
};
