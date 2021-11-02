/* tslint:disable */
/* eslint-disable */
/**
 * OasisExplorer API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
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
    ValidatorCommissionScheduleBounds,
    ValidatorCommissionScheduleBoundsFromJSON,
    ValidatorCommissionScheduleBoundsFromJSONTyped,
    ValidatorCommissionScheduleBoundsToJSON,
    ValidatorCommissionScheduleRates,
    ValidatorCommissionScheduleRatesFromJSON,
    ValidatorCommissionScheduleRatesFromJSONTyped,
    ValidatorCommissionScheduleRatesToJSON,
} from './';

/**
 *
 * @export
 * @interface ValidatorCommissionSchedule
 */
export interface ValidatorCommissionSchedule {
    /**
     *
     * @type {Array<ValidatorCommissionScheduleBounds>}
     * @memberof ValidatorCommissionSchedule
     */
    bounds?: Array<ValidatorCommissionScheduleBounds>;
    /**
     *
     * @type {Array<ValidatorCommissionScheduleRates>}
     * @memberof ValidatorCommissionSchedule
     */
    rates?: Array<ValidatorCommissionScheduleRates>;
}

export function ValidatorCommissionScheduleFromJSON(json: any): ValidatorCommissionSchedule {
    return ValidatorCommissionScheduleFromJSONTyped(json, false);
}

export function ValidatorCommissionScheduleFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValidatorCommissionSchedule {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'bounds': !exists(json, 'bounds') ? undefined : ((json['bounds'] as Array<any>).map(ValidatorCommissionScheduleBoundsFromJSON)),
        'rates': !exists(json, 'rates') ? undefined : ((json['rates'] as Array<any>).map(ValidatorCommissionScheduleRatesFromJSON)),
    };
}

export function ValidatorCommissionScheduleToJSON(value?: ValidatorCommissionSchedule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'bounds': value.bounds === undefined ? undefined : ((value.bounds as Array<any>).map(ValidatorCommissionScheduleBoundsToJSON)),
        'rates': value.rates === undefined ? undefined : ((value.rates as Array<any>).map(ValidatorCommissionScheduleRatesToJSON)),
    };
}


