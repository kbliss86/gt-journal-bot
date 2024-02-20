class AzureCognitiveSearchClient extends AbstractHttpClient {

    private static final String API_VERSION = '2023-07-01-Preview'

    AzureCognitiveSearchClient(String resourceName, String apiKey, String indexName) {
        this.baseUrl = "https://${resourceName}.search.windows.net/indexes/${indexName}"
        this.apiKey = apiKey
    }

    def embeddingSearch(def embedding, int numResults = 4, String filter) {
        return doPost("/docs/search?api-version=${API_VERSION}", [
                filter: filter,
                vector: [
                        value : embedding,
                        k     : numResults,
                        fields: 'content_vector'
                ],
                select: 'title,content,metadata',
                top: numResults
        ])
    }

}
