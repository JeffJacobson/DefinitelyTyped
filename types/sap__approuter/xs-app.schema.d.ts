// Original file: https://json.schemastore.org/xs-app.json
// Online converter: https://bcherny.github.io/json-schema-to-typescript-browser/
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type SourceSchema =
    | string
    | {
        path: string;
        matchCase?: boolean;
    };
export type ScopesSchema =
    | string
    | [string, ...string[]]
    | {
        GET?: ScopeTemplate;
        POST?: ScopeTemplate;
        HEAD?: ScopeTemplate;
        PUT?: ScopeTemplate;
        DELETE?: ScopeTemplate;
        TRACE?: ScopeTemplate;
        PATCH?: ScopeTemplate;
        OPTIONS?: ScopeTemplate;
        CONNECT?: ScopeTemplate;
        default?: ScopeTemplate;
    };
export type ScopeTemplate = string | [string, ...string[]];

/**
 * Application Router Configuration Schema
 */
export interface ComSapXsappSchema_82 {
    welcomeFile?: string;
    authenticationMethod?: "none" | "route";
    sessionTimeout?: number;
    pluginMetadataEndpoint?: string;
    routes?: Array<{
        source: SourceSchema;
        httpMethods?: [
            "DELETE" | "GET" | "HEAD" | "OPTIONS" | "POST" | "PUT" | "TRACE" | "PATCH",
            ...Array<"DELETE" | "GET" | "HEAD" | "OPTIONS" | "POST" | "PUT" | "TRACE" | "PATCH">,
        ];
        target?: string;
        destination?: string;
        localDir?: string;
        csrfProtection?: boolean;
        service?: string;
        endpoint?: string;
        authenticationType?: "xsuaa" | "basic" | "none";
        identityProvider?: string;
        scope?: ScopesSchema;
        replace?: {
            pathSuffixes: string[];
            vars?: string[];
            services?: {
                [k: string]: unknown;
            };
        };
        cacheControl?: string;
    }>;
    destinations?: {
        [k: string]: {
            logoutPath?: string;
            logoutMethod?: "PUT" | "POST" | "GET";
        };
    };
    services?: {
        [k: string]: {
            endpoint?: string;
            logoutPath?: string;
            logoutMethod?: "PUT" | "POST" | "GET";
        };
    };
    logout?: {
        logoutEndpoint?: string;
        logoutPage?: string;
    };
    login?: {
        callbackEndpoint: string;
    };
    whitelistService?: {
        endpoint: string;
    };
    compression?: {
        enabled?: boolean;
        minSize?: number;
    };
    websockets?: {
        enabled: boolean;
    };
    errorPage?: Array<{
        status: number | [number, ...number[]];
        file: string;
        [k: string]: unknown;
    }>;
    [k: string]: unknown;
}
