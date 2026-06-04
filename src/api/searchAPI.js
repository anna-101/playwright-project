class SearchApi {

    constructor(request) {
        this.request = request;
    }

    async getSearchItems(keyword) {

        const response = await this.request.get(
            `/search?keyword=${keyword}`
        );

        return response;
    }
}

module.exports = SearchApi;