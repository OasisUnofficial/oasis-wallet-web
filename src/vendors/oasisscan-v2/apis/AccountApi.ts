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


import * as runtime from '../runtime';
import {
    AccountDebondingResponse,
    AccountDebondingResponseFromJSON,
    AccountDebondingResponseToJSON,
    AccountDelegationsResponse,
    AccountDelegationsResponseFromJSON,
    AccountDelegationsResponseToJSON,
    AccountInfoResponse,
    AccountInfoResponseFromJSON,
    AccountInfoResponseToJSON,
    AccountRewardResponse,
    AccountRewardResponseFromJSON,
    AccountRewardResponseToJSON,
    AccountRewardStatsResponse,
    AccountRewardStatsResponseFromJSON,
    AccountRewardStatsResponseToJSON,
    AccountStakingEventsInfoResponse,
    AccountStakingEventsInfoResponseFromJSON,
    AccountStakingEventsInfoResponseToJSON,
    AccountStakingEventsResponse,
    AccountStakingEventsResponseFromJSON,
    AccountStakingEventsResponseToJSON,
} from '../models';

export interface AccountDebondingHandlerRequest {
    address: string;
    page: number;
    size: number;
}

export interface AccountDelegationsHandlerRequest {
    address: string;
    all: boolean;
    page: number;
    size: number;
}

export interface AccountInfoHandlerRequest {
    address: string;
}

export interface AccountRewardExportHandlerRequest {
    account: string;
}

export interface AccountRewardHandlerRequest {
    account: string;
    page: number;
    size: number;
}

export interface AccountRewardStatsHandlerRequest {
    account: string;
}

export interface AccountStakingEventsHandlerRequest {
    address: string;
    page: number;
    size: number;
}

export interface AccountStakingEventsInfoHandlerRequest {
    id: string;
}

/**
 * 
 */
export class AccountApi extends runtime.BaseAPI {

    /**
     */
    async accountDebondingHandlerRaw(requestParameters: AccountDebondingHandlerRequest): Promise<runtime.ApiResponse<AccountDebondingResponse>> {
        if (requestParameters.address === null || requestParameters.address === undefined) {
            throw new runtime.RequiredError('address','Required parameter requestParameters.address was null or undefined when calling accountDebondingHandler.');
        }

        if (requestParameters.page === null || requestParameters.page === undefined) {
            throw new runtime.RequiredError('page','Required parameter requestParameters.page was null or undefined when calling accountDebondingHandler.');
        }

        if (requestParameters.size === null || requestParameters.size === undefined) {
            throw new runtime.RequiredError('size','Required parameter requestParameters.size was null or undefined when calling accountDebondingHandler.');
        }

        const queryParameters: any = {};

        if (requestParameters.address !== undefined) {
            queryParameters['address'] = requestParameters.address;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.size !== undefined) {
            queryParameters['size'] = requestParameters.size;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/account/debonding`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountDebondingResponseFromJSON(jsonValue.data));
    }

    /**
     */
    async accountDebondingHandler(requestParameters: AccountDebondingHandlerRequest): Promise<AccountDebondingResponse> {
        const response = await this.accountDebondingHandlerRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async accountDelegationsHandlerRaw(requestParameters: AccountDelegationsHandlerRequest): Promise<runtime.ApiResponse<AccountDelegationsResponse>> {
        if (requestParameters.address === null || requestParameters.address === undefined) {
            throw new runtime.RequiredError('address','Required parameter requestParameters.address was null or undefined when calling accountDelegationsHandler.');
        }

        if (requestParameters.all === null || requestParameters.all === undefined) {
            throw new runtime.RequiredError('all','Required parameter requestParameters.all was null or undefined when calling accountDelegationsHandler.');
        }

        if (requestParameters.page === null || requestParameters.page === undefined) {
            throw new runtime.RequiredError('page','Required parameter requestParameters.page was null or undefined when calling accountDelegationsHandler.');
        }

        if (requestParameters.size === null || requestParameters.size === undefined) {
            throw new runtime.RequiredError('size','Required parameter requestParameters.size was null or undefined when calling accountDelegationsHandler.');
        }

        const queryParameters: any = {};

        if (requestParameters.address !== undefined) {
            queryParameters['address'] = requestParameters.address;
        }

        if (requestParameters.all !== undefined) {
            queryParameters['all'] = requestParameters.all;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.size !== undefined) {
            queryParameters['size'] = requestParameters.size;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/account/delegations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountDelegationsResponseFromJSON(jsonValue.data));
    }

    /**
     */
    async accountDelegationsHandler(requestParameters: AccountDelegationsHandlerRequest): Promise<AccountDelegationsResponse> {
        const response = await this.accountDelegationsHandlerRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async accountInfoHandlerRaw(requestParameters: AccountInfoHandlerRequest): Promise<runtime.ApiResponse<AccountInfoResponse>> {
        if (requestParameters.address === null || requestParameters.address === undefined) {
            throw new runtime.RequiredError('address','Required parameter requestParameters.address was null or undefined when calling accountInfoHandler.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/account/info/{address}`.replace(`{${"address"}}`, encodeURIComponent(String(requestParameters.address))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountInfoResponseFromJSON(jsonValue.data));
    }

    /**
     */
    async accountInfoHandler(requestParameters: AccountInfoHandlerRequest): Promise<AccountInfoResponse> {
        const response = await this.accountInfoHandlerRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async accountRewardExportHandlerRaw(requestParameters: AccountRewardExportHandlerRequest): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.account === null || requestParameters.account === undefined) {
            throw new runtime.RequiredError('account','Required parameter requestParameters.account was null or undefined when calling accountRewardExportHandler.');
        }

        const queryParameters: any = {};

        if (requestParameters.account !== undefined) {
            queryParameters['account'] = requestParameters.account;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/account/reward/export`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async accountRewardExportHandler(requestParameters: AccountRewardExportHandlerRequest): Promise<object> {
        const response = await this.accountRewardExportHandlerRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async accountRewardHandlerRaw(requestParameters: AccountRewardHandlerRequest): Promise<runtime.ApiResponse<AccountRewardResponse>> {
        if (requestParameters.account === null || requestParameters.account === undefined) {
            throw new runtime.RequiredError('account','Required parameter requestParameters.account was null or undefined when calling accountRewardHandler.');
        }

        if (requestParameters.page === null || requestParameters.page === undefined) {
            throw new runtime.RequiredError('page','Required parameter requestParameters.page was null or undefined when calling accountRewardHandler.');
        }

        if (requestParameters.size === null || requestParameters.size === undefined) {
            throw new runtime.RequiredError('size','Required parameter requestParameters.size was null or undefined when calling accountRewardHandler.');
        }

        const queryParameters: any = {};

        if (requestParameters.account !== undefined) {
            queryParameters['account'] = requestParameters.account;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.size !== undefined) {
            queryParameters['size'] = requestParameters.size;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/account/reward/list`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountRewardResponseFromJSON(jsonValue));
    }

    /**
     */
    async accountRewardHandler(requestParameters: AccountRewardHandlerRequest): Promise<AccountRewardResponse> {
        const response = await this.accountRewardHandlerRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async accountRewardStatsHandlerRaw(requestParameters: AccountRewardStatsHandlerRequest): Promise<runtime.ApiResponse<AccountRewardStatsResponse>> {
        if (requestParameters.account === null || requestParameters.account === undefined) {
            throw new runtime.RequiredError('account','Required parameter requestParameters.account was null or undefined when calling accountRewardStatsHandler.');
        }

        const queryParameters: any = {};

        if (requestParameters.account !== undefined) {
            queryParameters['account'] = requestParameters.account;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/account/reward/stats`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountRewardStatsResponseFromJSON(jsonValue));
    }

    /**
     */
    async accountRewardStatsHandler(requestParameters: AccountRewardStatsHandlerRequest): Promise<AccountRewardStatsResponse> {
        const response = await this.accountRewardStatsHandlerRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async accountStakingEventsHandlerRaw(requestParameters: AccountStakingEventsHandlerRequest): Promise<runtime.ApiResponse<AccountStakingEventsResponse>> {
        if (requestParameters.address === null || requestParameters.address === undefined) {
            throw new runtime.RequiredError('address','Required parameter requestParameters.address was null or undefined when calling accountStakingEventsHandler.');
        }

        if (requestParameters.page === null || requestParameters.page === undefined) {
            throw new runtime.RequiredError('page','Required parameter requestParameters.page was null or undefined when calling accountStakingEventsHandler.');
        }

        if (requestParameters.size === null || requestParameters.size === undefined) {
            throw new runtime.RequiredError('size','Required parameter requestParameters.size was null or undefined when calling accountStakingEventsHandler.');
        }

        const queryParameters: any = {};

        if (requestParameters.address !== undefined) {
            queryParameters['address'] = requestParameters.address;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.size !== undefined) {
            queryParameters['size'] = requestParameters.size;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/account/staking/events`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountStakingEventsResponseFromJSON(jsonValue));
    }

    /**
     */
    async accountStakingEventsHandler(requestParameters: AccountStakingEventsHandlerRequest): Promise<AccountStakingEventsResponse> {
        const response = await this.accountStakingEventsHandlerRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async accountStakingEventsInfoHandlerRaw(requestParameters: AccountStakingEventsInfoHandlerRequest): Promise<runtime.ApiResponse<AccountStakingEventsInfoResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling accountStakingEventsInfoHandler.');
        }

        const queryParameters: any = {};

        if (requestParameters.id !== undefined) {
            queryParameters['id'] = requestParameters.id;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/account/staking/events/info`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountStakingEventsInfoResponseFromJSON(jsonValue));
    }

    /**
     */
    async accountStakingEventsInfoHandler(requestParameters: AccountStakingEventsInfoHandlerRequest): Promise<AccountStakingEventsInfoResponse> {
        const response = await this.accountStakingEventsInfoHandlerRaw(requestParameters);
        return await response.value();
    }

}
