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

import { FieldValueInfo } from './fieldValueInfo';
import { FormFieldRepresentation } from './formFieldRepresentation';
import { FormJavascriptEventRepresentation } from './formJavascriptEventRepresentation';
import { FormOutcomeRepresentation } from './formOutcomeRepresentation';
import { FormTabRepresentation } from './formTabRepresentation';
import { FormVariableRepresentation } from './formVariableRepresentation';

export class FormDefinitionRepresentation {
    className?: string;
    customFieldTemplates?: { [key: string]: string; };
    customFieldsValueInfo?: { [key: string]: FieldValueInfo; };
    fields?: Array<FormFieldRepresentation>;
    globalDateFormat?: string;
    gridsterForm?: boolean;
    id?: number;
    javascriptEvents?: Array<FormJavascriptEventRepresentation>;
    metadata?: { [key: string]: string; };
    name?: string;
    outcomeTarget?: string;
    outcomes?: Array<FormOutcomeRepresentation>;
    processDefinitionId?: string;
    processDefinitionKey?: string;
    processDefinitionName?: string;
    selectedOutcome?: string;
    style?: string;
    tabs?: Array<FormTabRepresentation>;
    taskDefinitionKey?: string;
    taskId?: string;
    taskName?: string;
    variables?: Array<FormVariableRepresentation>;
}
