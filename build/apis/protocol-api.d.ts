/**
 * DeBank OpenAPI
 * Build for DeFi Developers.
 *
 * OpenAPI spec version: 1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { Protocol } from '../models';
/**
 * ProtocolApi - axios parameter creator
 * @export
 */
export declare const ProtocolApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProtocolListR: (options?: any) => Promise<RequestArgs>;
    /**
     *
     * @param {string} id protocol id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProtocolR: (id: string, options?: any) => Promise<RequestArgs>;
    /**
     *
     * @param {string} id protocol id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTvl: (id: string, options?: any) => Promise<RequestArgs>;
};
/**
 * ProtocolApi - functional programming interface
 * @export
 */
export declare const ProtocolApiFp: (configuration?: Configuration) => {
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProtocolListR(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Protocol>>>;
    /**
     *
     * @param {string} id protocol id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProtocolR(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Protocol>>;
    /**
     *
     * @param {string} id protocol id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTvl(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
};
/**
 * ProtocolApi - factory interface
 * @export
 */
export declare const ProtocolApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProtocolListR(options?: any): AxiosPromise<Array<Protocol>>;
    /**
     *
     * @param {string} id protocol id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProtocolR(id: string, options?: any): AxiosPromise<Protocol>;
    /**
     *
     * @param {string} id protocol id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTvl(id: string, options?: any): AxiosPromise<void>;
};
/**
 * ProtocolApi - object-oriented interface
 * @export
 * @class ProtocolApi
 * @extends {BaseAPI}
 */
export declare class ProtocolApi extends BaseAPI {
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProtocolApi
     */
    getProtocolListR(options?: any): Promise<import("axios").AxiosResponse<Protocol[], any>>;
    /**
     *
     * @param {string} id protocol id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProtocolApi
     */
    getProtocolR(id: string, options?: any): Promise<import("axios").AxiosResponse<Protocol, any>>;
    /**
     *
     * @param {string} id protocol id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProtocolApi
     */
    getTvl(id: string, options?: any): Promise<import("axios").AxiosResponse<void, any>>;
}
