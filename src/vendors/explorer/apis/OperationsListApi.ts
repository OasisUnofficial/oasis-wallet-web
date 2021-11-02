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


import * as runtime from '../runtime';
import {
    OperationsRow,
    OperationsRowFromJSON,
    OperationsRowToJSON,
} from '../models';

export interface GetTransactionsListRequest {
    limit?: number;
    offset?: number;
    from?: number;
    to?: number;
    sender?: string;
    receiver?: string;
    accountId?: string;
    blockId?: Array<string>;
    blockLevel?: Array<number>;
    operationId?: Array<string>;
    operationKind?: Array<string>;
}

/**
 *
 */
export class OperationsListApi extends runtime.BaseAPI {

    /**
     */
    async getTransactionsListRaw(requestParameters: GetTransactionsListRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<OperationsRow>>> {
        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.from !== undefined) {
            queryParameters['from'] = requestParameters.from;
        }

        if (requestParameters.to !== undefined) {
            queryParameters['to'] = requestParameters.to;
        }

        if (requestParameters.sender !== undefined) {
            queryParameters['sender'] = requestParameters.sender;
        }

        if (requestParameters.receiver !== undefined) {
            queryParameters['receiver'] = requestParameters.receiver;
        }

        if (requestParameters.accountId !== undefined) {
            queryParameters['account_id'] = requestParameters.accountId;
        }

        if (requestParameters.blockId) {
            queryParameters['block_id'] = requestParameters.blockId;
        }

        if (requestParameters.blockLevel) {
            queryParameters['block_level'] = requestParameters.blockLevel;
        }

        if (requestParameters.operationId) {
            queryParameters['operation_id'] = requestParameters.operationId;
        }

        if (requestParameters.operationKind) {
            queryParameters['operation_kind'] = requestParameters.operationKind;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/data/transactions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(OperationsRowFromJSON));
    }

    /**
     */
    async getTransactionsList(requestParameters: GetTransactionsListRequest, initOverrides?: RequestInit): Promise<Array<OperationsRow>> {
        const response = await this.getTransactionsListRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
