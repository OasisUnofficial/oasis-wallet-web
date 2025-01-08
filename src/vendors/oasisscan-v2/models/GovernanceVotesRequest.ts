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
 * @interface GovernanceVotesRequest
 */
export interface GovernanceVotesRequest {
    /**
     * 
     * @type {number}
     * @memberof GovernanceVotesRequest
     */
    proposalId?: number;
    /**
     * 
     * @type {string}
     * @memberof GovernanceVotesRequest
     */
    validator?: string;
    /**
     * 
     * @type {number}
     * @memberof GovernanceVotesRequest
     */
    page: number;
    /**
     * 
     * @type {number}
     * @memberof GovernanceVotesRequest
     */
    size: number;
}

export function GovernanceVotesRequestFromJSON(json: any): GovernanceVotesRequest {
    return GovernanceVotesRequestFromJSONTyped(json, false);
}

export function GovernanceVotesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GovernanceVotesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'proposalId': !exists(json, 'proposalId') ? undefined : json['proposalId'],
        'validator': !exists(json, 'validator') ? undefined : json['validator'],
        'page': json['page'],
        'size': json['size'],
    };
}

export function GovernanceVotesRequestToJSON(value?: GovernanceVotesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'proposalId': value.proposalId,
        'validator': value.validator,
        'page': value.page,
        'size': value.size,
    };
}

