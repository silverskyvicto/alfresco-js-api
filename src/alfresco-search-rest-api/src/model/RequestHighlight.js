/**
 * Alfresco Content Services REST API
 * **Search API**  Provides access to the search features of Alfresco Content Services. 
 *
 * OpenAPI spec version: 1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/RequestHighlightFields'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./RequestHighlightFields'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoContentServicesRestApi) {
      root.AlfrescoContentServicesRestApi = {};
    }
    root.AlfrescoContentServicesRestApi.RequestHighlight = factory(root.AlfrescoContentServicesRestApi.ApiClient, root.AlfrescoContentServicesRestApi.RequestHighlightFields);
  }
}(this, function(ApiClient, RequestHighlightFields) {
  'use strict';




  /**
   * The RequestHighlight model module.
   * @module model/RequestHighlight
   * @version 1
   */

  /**
   * Constructs a new <code>RequestHighlight</code>.
   * Request that highlight fragments to be added to result set rows The properties reflect SOLR highlighting parameters. 
   * @alias module:model/RequestHighlight
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>RequestHighlight</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RequestHighlight} obj Optional instance to populate.
   * @return {module:model/RequestHighlight} The populated <code>RequestHighlight</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('prefix')) {
        obj['prefix'] = ApiClient.convertToType(data['prefix'], 'String');
      }
      if (data.hasOwnProperty('postfix')) {
        obj['postfix'] = ApiClient.convertToType(data['postfix'], 'String');
      }
      if (data.hasOwnProperty('snippetCount')) {
        obj['snippetCount'] = ApiClient.convertToType(data['snippetCount'], 'Number');
      }
      if (data.hasOwnProperty('fragmentSize')) {
        obj['fragmentSize'] = ApiClient.convertToType(data['fragmentSize'], 'Number');
      }
      if (data.hasOwnProperty('maxAnalyzedChars')) {
        obj['maxAnalyzedChars'] = ApiClient.convertToType(data['maxAnalyzedChars'], 'Number');
      }
      if (data.hasOwnProperty('mergeContiguous')) {
        obj['mergeContiguous'] = ApiClient.convertToType(data['mergeContiguous'], 'Boolean');
      }
      if (data.hasOwnProperty('usePhraseHighlighter')) {
        obj['usePhraseHighlighter'] = ApiClient.convertToType(data['usePhraseHighlighter'], 'Boolean');
      }
      if (data.hasOwnProperty('fields')) {
        obj['fields'] = ApiClient.convertToType(data['fields'], [RequestHighlightFields]);
      }
    }
    return obj;
  }

  /**
   * The string used to mark the start of a highlight in a fragment.
   * @member {String} prefix
   */
  exports.prototype['prefix'] = undefined;
  /**
   * The string used to mark the end of a highlight in a fragment.
   * @member {String} postfix
   */
  exports.prototype['postfix'] = undefined;
  /**
   * The maximum number of distinct highlight snippets to return for each highlight field.
   * @member {Number} snippetCount
   */
  exports.prototype['snippetCount'] = undefined;
  /**
   * The character length of each snippet.
   * @member {Number} fragmentSize
   */
  exports.prototype['fragmentSize'] = undefined;
  /**
   * The number of characters to be considered for highlighting. Matches after this count will not be shown.
   * @member {Number} maxAnalyzedChars
   */
  exports.prototype['maxAnalyzedChars'] = undefined;
  /**
   * If fragments over lap they can be  merged into one larger fragment
   * @member {Boolean} mergeContiguous
   */
  exports.prototype['mergeContiguous'] = undefined;
  /**
   * Should phrases be identified.
   * @member {Boolean} usePhraseHighlighter
   */
  exports.prototype['usePhraseHighlighter'] = undefined;
  /**
   * The fields to highlight and field specific configuration properties for each field
   * @member {Array.<module:model/RequestHighlightFields>} fields
   */
  exports.prototype['fields'] = undefined;



  return exports;
}));

