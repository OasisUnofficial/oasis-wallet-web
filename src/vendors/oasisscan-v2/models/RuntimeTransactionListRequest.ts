/* tslint:disable */
/* eslint-disable */
/**
 * 
 * This api document example is the Mainnet document, and the Testnet base URL is api.oasisscan.com/v2/testnet
 *
 * The version of the OpenAPI document: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface RuntimeTransactionListRequest
 */
export interface RuntimeTransactionListRequest {
    /**
     * 
     * @type {string}
     * @memberof RuntimeTransactionListRequest
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof RuntimeTransactionListRequest
     */
    address?: string;
    /**
     * 
     * @type {number}
     * @memberof RuntimeTransactionListRequest
     */
    round?: number;
    /**
     * 
     * @type {number}
     * @memberof RuntimeTransactionListRequest
     */
    page: number;
    /**
     * 
     * @type {number}
     * @memberof RuntimeTransactionListRequest
     */
    size: number;
}

export function RuntimeTransactionListRequestFromJSON(json: any): RuntimeTransactionListRequest {
    return RuntimeTransactionListRequestFromJSONTyped(json, false);
}

export function RuntimeTransactionListRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RuntimeTransactionListRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'round': !exists(json, 'round') ? undefined : json['round'],
        'page': json['page'],
        'size': json['size'],
    };
}

export function RuntimeTransactionListRequestToJSON(value?: RuntimeTransactionListRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'address': value.address,
        'round': value.round,
        'page': value.page,
        'size': value.size,
    };
}


