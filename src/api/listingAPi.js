class ListingApi {

    constructor(request) {
        this.request = request;
    }

    async getListings(pageNumber = 1, pageSize = 20) {

        const response = await this.request.get(
            `${process.env.API_BASE_URL}/search`,
            {
                params: {
                    page: pageNumber,
                    pageSize: pageSize
                }
            }
        );

        return await response.json();
    }
}