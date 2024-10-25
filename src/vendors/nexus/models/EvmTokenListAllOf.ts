/* tslint:disable */
/* eslint-disable */
/**
 * Oasis Nexus API V1
 * An API for accessing indexed data from the Oasis Network.  <!-- Acts as a separator after search in sidebar --> # Endpoints 
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    EvmToken,
    EvmTokenFromJSON,
    EvmTokenFromJSONTyped,
    EvmTokenToJSON,
} from './';

/**
 * A list of tokens in a runtime.
 * @export
 * @interface EvmTokenListAllOf
 */
export interface EvmTokenListAllOf {
    /**
     * A list of L2 EVM tokens (ERC-20, ERC-721, ...).
     * @type {Array<EvmToken>}
     * @memberof EvmTokenListAllOf
     */
    evm_tokens: Array<EvmToken>;
}

export function EvmTokenListAllOfFromJSON(json: any): EvmTokenListAllOf {
    return EvmTokenListAllOfFromJSONTyped(json, false);
}

export function EvmTokenListAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): EvmTokenListAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'evm_tokens': ((json['evm_tokens'] as Array<any>).map(EvmTokenFromJSON)),
    };
}

export function EvmTokenListAllOfToJSON(value?: EvmTokenListAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'evm_tokens': ((value.evm_tokens as Array<any>).map(EvmTokenToJSON)),
    };
}


