module.exports = {
  /**
   * Fetch a list of all campaigns
   *
   * @param {object} options - An object with a sort property as `status`. Accepts `all`,
   *                           `draft`, `active`, `paused`
   * @param {callback} callback - An optional callback
   * @returns {promise}
   */
  listCampaigns(options = {}, callback) {
    return this.get(`${this.accountId}/campaigns/`, { qs: options }, callback);
  },
  /**
   * Fetch a campaign
   *
   * @param {object} campaignId - Required. The campaign id
   * @param {callback} callback - An optional callback
   * @returns {promise}
   */
  fetchCampaign(campaignId, callback) {
    return this.get(`${this.accountId}/campaigns/${campaignId}`, {}, callback);
  },
  /**
   * Activate a campaign
   *
   * @param {object} campaignId - Required. The campaign id
   * @param {callback} callback - An optional callback
   * @returns {promise}
   */
  activateCampaign(campaignId, callback) {
    return this.post(`${this.accountId}/campaigns/${campaignId}/activate`, {}, callback);
  },
  /**
   * Pause a campaign
   *
   * @param {object} campaignId - Required. The campaign id
   * @param {callback} callback - An optional callback
   * @returns {promise}
   */
  pauseCampaign(campaignId, callback) {
    return this.post(`${this.accountId}/campaigns/${campaignId}/pause`, {}, callback);
  },
  /**
   * List all subscribers subscribed to a campaign
   *
   * @param {object} campaignId - Required. The campaign id
   * @param {callback} callback - An optional callback
   * @returns {promise}
   */
  listAllSubscribesToCampaign(campaignId, callback) {
    return this.get(`${this.accountId}/campaigns/${campaignId}/subscribers`, {}, callback);
  },
  /**
   * Subscribe someone to a campaign
   *
   * @param {object} campaignId - Required. The campaign id
   * @param {object} payload - Required. The subscriber's details
   * @param {callback} callback - An optional callback
   * @returns {promise}
   */
  subscribeToCampaign(campaignId, payload, callback) {
    return this.post(`${this.accountId}/campaigns/${campaignId}/subscribers`, { payload }, callback);
  }
};
