/*!
    * @license
    * Copyright 2018 Alfresco Software, Ltd.
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *     http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */

import { AlfrescoApi } from '../../../../alfrescoApi';
import { ProcessClient } from '../../../../processClient';

export class ProcessScopeApi {

    apiClient: ProcessClient;

    constructor(alfrescoApi?: AlfrescoApi) {
        this.apiClient = alfrescoApi.processClient;
    }

    /**
     * Function to receive the result of the getRuntimeProcessScopes operation.
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ProcessScopeRepresentation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getRuntimeProcessScopes
     * @param {module:model/ProcessScopesRequestRepresentation} processScopesRequest processScopesRequest
     */
    getRuntimeProcessScopes(processScopesRequest) {
        let postBody = processScopesRequest;

        // verify the required parameter 'processScopesRequest' is set
        if (processScopesRequest === undefined || processScopesRequest === null) {
            throw "Missing param 'processScopesRequest' in getRuntimeProcessScopes";
        }


        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};


        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/process-scopes', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }
}
