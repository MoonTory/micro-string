export type Middleware = (...args: any) => (req: any, res: any, next: any) => any;
