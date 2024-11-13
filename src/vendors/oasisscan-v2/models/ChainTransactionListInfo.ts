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
 * @interface ChainTransactionListInfo
 */
export interface ChainTransactionListInfo {
    /**
     * 
     * @type {string}
     * @memberof ChainTransactionListInfo
     */
    txType: string;
    /**
     * 
     * @type {string}
     * @memberof ChainTransactionListInfo
     */
    txHash?: string;
    /**
     * 
     * @type {number}
     * @memberof ChainTransactionListInfo
     */
    height?: number;
    /**
     * 
     * @type {string}
     * @memberof ChainTransactionListInfo
     */
    method?: string;
    /**
     * 
     * @type {string}
     * @memberof ChainTransactionListInfo
     */
    fee?: string;
    /**
     * 
     * @type {string}
     * @memberof ChainTransactionListInfo
     */
    amount?: string;
    /**
     * 
     * @type {string}
     * @memberof ChainTransactionListInfo
     */
    shares?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ChainTransactionListInfo
     */
    add?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ChainTransactionListInfo
     */
    timestamp?: number;
    /**
     * 
     * @type {number}
     * @memberof ChainTransactionListInfo
     */
    time?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ChainTransactionListInfo
     */
    status?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ChainTransactionListInfo
     */
    from?: string;
    /**
     * 
     * @type {string}
     * @memberof ChainTransactionListInfo
     */
    to?: string;
    /**
     * 
     * @type {string}
     * @memberof ChainTransactionListInfo
     */
    runtimeId?: string;
    /**
     * 
     * @type {string}
     * @memberof ChainTransactionListInfo
     */
    runtimeName?: string;
    /**
     * 
     * @type {number}
     * @memberof ChainTransactionListInfo
     */
    round?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ChainTransactionListInfo
     */
    result?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ChainTransactionListInfo
     */
    type?: string;
}

export function ChainTransactionListInfoFromJSON(json: any): ChainTransactionListInfo {
    return ChainTransactionListInfoFromJSONTyped(json, false);
}

export function ChainTransactionListInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChainTransactionListInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'txType': json['txType'],
        'txHash': !exists(json, 'txHash') ? undefined : json['txHash'],
        'height': !exists(json, 'height') ? undefined : json['height'],
        'method': !exists(json, 'method') ? undefined : json['method'],
        'fee': !exists(json, 'fee') ? undefined : json['fee'],
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'shares': !exists(json, 'shares') ? undefined : json['shares'],
        'add': !exists(json, 'add') ? undefined : json['add'],
        'timestamp': !exists(json, 'timestamp') ? undefined : json['timestamp'],
        'time': !exists(json, 'time') ? undefined : json['time'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'from': !exists(json, 'from') ? undefined : json['from'],
        'to': !exists(json, 'to') ? undefined : json['to'],
        'runtimeId': !exists(json, 'runtimeId') ? undefined : json['runtimeId'],
        'runtimeName': !exists(json, 'runtimeName') ? undefined : json['runtimeName'],
        'round': !exists(json, 'round') ? undefined : json['round'],
        'result': !exists(json, 'result') ? undefined : json['result'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function ChainTransactionListInfoToJSON(value?: ChainTransactionListInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'txType': value.txType,
        'txHash': value.txHash,
        'height': value.height,
        'method': value.method,
        'fee': value.fee,
        'amount': value.amount,
        'shares': value.shares,
        'add': value.add,
        'timestamp': value.timestamp,
        'time': value.time,
        'status': value.status,
        'from': value.from,
        'to': value.to,
        'runtimeId': value.runtimeId,
        'runtimeName': value.runtimeName,
        'round': value.round,
        'result': value.result,
        'type': value.type,
    };
}


