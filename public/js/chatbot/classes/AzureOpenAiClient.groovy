class AzureOpenAiClient extends AbstractHttpClient {

    private static final String API_VERSION = '2023-05-15'
    private final String embeddingDeploymentId
    private final String completionDeploymentId
    private final String chatDeploymentId

    AzureOpenAiClient(String resourceName, String apiKey, String embeddingDeploymentId, String completionDeploymentId, String chatDeploymentId) {
        this.baseUrl = "https://${resourceName}.openai.azure.com/openai/deployments"
        this.apiKey = apiKey
        this.embeddingDeploymentId = embeddingDeploymentId
        this.completionDeploymentId = completionDeploymentId
        this.chatDeploymentId = chatDeploymentId
    }

    def embeddings(String input, String user = null) {
        return doPost("/${embeddingDeploymentId}/embeddings?api-version=${API_VERSION}", [
                'input': input,
                'user' : user ?: ''
        ])
    }

    def completion(String prompt, float temperature = 0.7, int maxTokens = 2048) {
        return doPost("/${completionDeploymentId}/completions?api-version=${API_VERSION}", [
                'prompt'    : prompt,
                temperature : temperature,
                'max_tokens': maxTokens
        ])
    }

    def chat(String input, float temperature = 0.7, int max_tokens = 4096, def dialogHistory = []) {
        def messages = dialogHistory.collect { }
        messages.add([
                role   : 'user',
                content: input
        ])

        return doPost("/${chatDeploymentId}/chat/completions?api-version=${API_VERSION}", [
                messages   : messages,
                temperature: temperature,
                max_tokens : max_tokens
        ])
    }

}
