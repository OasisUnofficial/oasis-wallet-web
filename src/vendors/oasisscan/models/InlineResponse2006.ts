/* tslint:disable */
/* eslint-disable */
/**
 * Oasisscan API
 * https://github.com/bitcat365/oasisscan-backend#readme https://api.oasisscan.com/mainnet/swagger-ui/#/ https://api.oasisscan.com/mainnet/v2/api-docs 
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    InlineResponse2006Data,
    InlineResponse2006DataFromJSON,
    InlineResponse2006DataFromJSONTyped,
    InlineResponse2006DataToJSON,
} from './';

/**
 * 
 * @export
 * @interface InlineResponse2006
 */
export interface InlineResponse2006 {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2006
     */
    code: number;
    /**
     * 
     * @type {InlineResponse2006Data}
     * @memberof InlineResponse2006
     */
    data: InlineResponse2006Data;
}

export function InlineResponse2006FromJSON(json: any): InlineResponse2006 {
    return InlineResponse2006FromJSONTyped(json, false);
}

export function InlineResponse2006FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse2006 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'data': InlineResponse2006DataFromJSON(json['data']),
    };
}

export function InlineResponse2006ToJSON(value?: InlineResponse2006 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'data': InlineResponse2006DataToJSON(value.data),
    };
}

