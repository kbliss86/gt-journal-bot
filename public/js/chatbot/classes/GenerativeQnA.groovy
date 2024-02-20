class GenerativeQnA {

    static AzureCognitiveSearchClient searchClient
    static AzureOpenAiClient oaiClient

    static init(
        String searchResourceName,
        String searchApiKey,
        String searchIndexName,
        String oaiResourceName,
        String oaiApiKey,
        String embeddingDeployment,
        String completionDeployment,
        String chatDeployment
    ) {
        searchClient = new AzureCognitiveSearchClient(searchResourceName, searchApiKey, searchIndexName)
        oaiClient = new AzureOpenAiClient(oaiResourceName, oaiApiKey, embeddingDeployment, completionDeployment, chatDeployment)
    }

    static embeddings(String input, String user = null) {
        return oaiClient.embeddings(input, user)
    }

    static embeddingSearch(def embedding, int numResults = 4, String filter = null) {
        return searchClient.embeddingSearch(embedding, numResults, filter)
    }

    static chat(String input, float temperature = 0.7, int max_tokens = 4096, def dialogHistory = []) {
        return oaiClient.chat(input, temperature, max_tokens, dialogHistory)
    }

    static completion(String prompt, float temperature = 0.7, int maxTokens = 2048) {
        return oaiClient.completion(prompt, temperature, maxTokens)
    }

}
