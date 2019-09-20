import { Map } from '../utils';
import { EndpointFunction } from './endpointFunction';

export interface EndpointMap extends Map<EndpointFunction> {}
export * from './endpointFunction';
