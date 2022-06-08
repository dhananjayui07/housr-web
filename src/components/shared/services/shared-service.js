class sharedDataService {
  constructor() {
    this.propertyListingData = {};
  }

  getPropertyListing(data) {
    this.propertyListingData = data;
  }

  setPropertyListing() {
    return this.propertyListingData;
  }
}
export default new sharedDataService();
