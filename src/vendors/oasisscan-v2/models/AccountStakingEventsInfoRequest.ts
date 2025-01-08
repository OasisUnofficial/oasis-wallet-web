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
 * @interface AccountStakingEventsInfoRequest
 */
export interface AccountStakingEventsInfoRequest {
    /**
     * 
     * @type {string}
     * @memberof AccountStakingEventsInfoRequest
     */
    id: string;
}

export function AccountStakingEventsInfoRequestFromJSON(json: any): AccountStakingEventsInfoRequest {
    return AccountStakingEventsInfoRequestFromJSONTyped(json, false);
}

export function AccountStakingEventsInfoRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountStakingEventsInfoRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
    };
}

export function AccountStakingEventsInfoRequestToJSON(value?: AccountStakingEventsInfoRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
    };
}

