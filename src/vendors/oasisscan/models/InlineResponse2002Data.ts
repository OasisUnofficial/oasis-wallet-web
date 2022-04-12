/* tslint:disable */
/* eslint-disable */
/**
 * Oasisscan API
 * https://github.com/bitcat365/oasisscan-backend#readme
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
    OperationsRow,
    OperationsRowFromJSON,
    OperationsRowFromJSONTyped,
    OperationsRowToJSON,
} from './';

/**
 * 
 * @export
 * @interface InlineResponse2002Data
 */
export interface InlineResponse2002Data {
    /**
     * 
     * @type {Array<OperationsRow>}
     * @memberof InlineResponse2002Data
     */
    list: Array<OperationsRow>;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2002Data
     */
    page: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2002Data
     */
    size: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2002Data
     */
    maxPage: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2002Data
     */
    totalSize: number;
}

export function InlineResponse2002DataFromJSON(json: any): InlineResponse2002Data {
    return InlineResponse2002DataFromJSONTyped(json, false);
}

export function InlineResponse2002DataFromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse2002Data {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'list': ((json['list'] as Array<any>).map(OperationsRowFromJSON)),
        'page': json['page'],
        'size': json['size'],
        'maxPage': json['maxPage'],
        'totalSize': json['totalSize'],
    };
}

export function InlineResponse2002DataToJSON(value?: InlineResponse2002Data | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'list': ((value.list as Array<any>).map(OperationsRowToJSON)),
        'page': value.page,
        'size': value.size,
        'maxPage': value.maxPage,
        'totalSize': value.totalSize,
    };
}

