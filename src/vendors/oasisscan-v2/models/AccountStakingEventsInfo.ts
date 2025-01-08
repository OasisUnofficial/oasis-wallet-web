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
 * @interface AccountStakingEventsInfo
 */
export interface AccountStakingEventsInfo {
    /**
     * 
     * @type {string}
     * @memberof AccountStakingEventsInfo
     */
    id: string;
    /**
     * 
     * @type {number}
     * @memberof AccountStakingEventsInfo
     */
    height: number;
    /**
     * 
     * @type {string}
     * @memberof AccountStakingEventsInfo
     */
    txHash: string;
    /**
     * 
     * @type {string}
     * @memberof AccountStakingEventsInfo
     */
    kind: string;
}

export function AccountStakingEventsInfoFromJSON(json: any): AccountStakingEventsInfo {
    return AccountStakingEventsInfoFromJSONTyped(json, false);
}

export function AccountStakingEventsInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountStakingEventsInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'height': json['height'],
        'txHash': json['txHash'],
        'kind': json['kind'],
    };
}

export function AccountStakingEventsInfoToJSON(value?: AccountStakingEventsInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'height': value.height,
        'txHash': value.txHash,
        'kind': value.kind,
    };
}

