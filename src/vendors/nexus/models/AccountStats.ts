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
/**
 * 
 * @export
 * @interface AccountStats
 */
export interface AccountStats {
    /**
     * The total amount of native tokens sent, in base units.
     * DEPRECATED: This field might be inaccurate. Nexus is currently not able to track
     * certain actions which subtract/add tokens.
     * @type {string}
     * @memberof AccountStats
     */
    total_sent?: string;
    /**
     * The total amount of native tokens received, in base units.
     * DEPRECATED: This field might be inaccurate. Nexus is currently not able to track
     * certain actions which subtract/add tokens.
     * @type {string}
     * @memberof AccountStats
     */
    total_received?: string;
    /**
     * The total number of transactions this account was involved with.
     * @type {number}
     * @memberof AccountStats
     */
    num_txns: number;
}

export function AccountStatsFromJSON(json: any): AccountStats {
    return AccountStatsFromJSONTyped(json, false);
}

export function AccountStatsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountStats {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'total_sent': !exists(json, 'total_sent') ? undefined : json['total_sent'],
        'total_received': !exists(json, 'total_received') ? undefined : json['total_received'],
        'num_txns': json['num_txns'],
    };
}

export function AccountStatsToJSON(value?: AccountStats | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'total_sent': value.total_sent,
        'total_received': value.total_received,
        'num_txns': value.num_txns,
    };
}

