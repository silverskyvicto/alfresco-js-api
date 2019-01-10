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

export class RatingBody {
    /**
     * The rating scheme type. Possible values are likes and fiveStar.
     */
    id: RatingBody.IdEnum | string;
    /**
     * The rating. The type is specific to the rating scheme, boolean for the likes and an integer for the fiveStar
     */
    myRating: string;

    constructor(input?: any) {

        if (input) {
            Object.assign(this, input);
        }
    }

}
export namespace RatingBody {
    export type IdEnum = 'likes' | 'fiveStar';
    export const IdEnum = {
        Likes: 'likes' as IdEnum,
        FiveStar: 'fiveStar' as IdEnum
    };
}
