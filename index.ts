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

export * from './src/api/legacy';
export * from './src/api/content-rest-api/src/index';
export * from './src/api/activiti-rest-api/src/index';
export * from './src/api-new/content-rest-api/index';
export * from './src/api-new/discovery-rest-api/index';
export * from './src/api-new/gs-classification-rest-api/index';
export * from './src/api-new/gs-core-rest-api/index';
export * from './src/api-new/auth-rest-api/index';
export * from './src/api-new/activiti-rest-api/index';
export * from './src/api-new/search-rest-api/index';

export { ContentApi } from './src/contentApi';
export { AlfrescoUpload } from './src/api/alfrescoUpload';
export { ContentAuth } from './src/authentication/contentAuth';
export { ProcessAuth } from './src/authentication/processAuth';
export { Oauth2Auth } from './src/authentication/oauth2Auth';
export { ContentClient } from './src/contentClient';
export { ProcessClient } from './src/processClient';
export { Storage } from './src/storage';
export { AlfrescoApi } from './src/alfrescoApi';
export { AlfrescoApiCompatibility } from './src/alfrescoApiCompatibility';
export { AlfrescoApiClient } from './src/alfrescoApiClient';
