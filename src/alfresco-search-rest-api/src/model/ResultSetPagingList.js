/**
 * Alfresco Content Services REST API
 * **Search API**  Provides access to the search features of Alfresco Content Services.
 *
 * OpenAPI spec version: 1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/Pagination', '../model/ResultSetContext', '../model/ResultSetRowEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./Pagination'), require('./ResultSetContext'), require('./ResultSetRowEntry'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoContentServicesRestApi) {
      root.AlfrescoContentServicesRestApi = {};
    }
    root.AlfrescoContentServicesRestApi.ResultSetPagingList = factory(root.AlfrescoContentServicesRestApi.ApiClient, root.AlfrescoContentServicesRestApi.Pagination, root.AlfrescoContentServicesRestApi.ResultSetContext, root.AlfrescoContentServicesRestApi.ResultSetRowEntry);
  }
}(this, function(ApiClient, Pagination, ResultSetContext, ResultSetRowEntry) {
  'use strict';




  /**
   * The ResultSetPagingList model module.
   * @module model/ResultSetPagingList
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ResultSetPagingList</code>.
   * @alias module:model/ResultSetPagingList
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ResultSetPagingList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {any} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResultSetPagingList} obj Optional instance to populate.
   * @return {module:model/ResultSetPagingList} The populated <code>ResultSetPagingList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
      if (data.hasOwnProperty('context')) {
        obj['context'] = ResultSetContext.constructFromObject(data['context']);
      }
      if (data.hasOwnProperty('entries')) {
        obj['entries'] = ApiClient.convertToType(data['entries'], [ResultSetRowEntry]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;
  /**
   * @member {module:model/ResultSetContext} context
   */
  exports.prototype['context'] = undefined;
  /**
   * @member {module:model/ResultSetRowEntry[]} entries
   */
  exports.prototype['entries'] = undefined;



  return exports;
}));


