def NUMBER_OF_SEARCH_RESULTS = 4
def TEMPERATURE = 0.7
def MAX_TOKENS = 4096

//retrieve embedding for user input
def embedding = GenerativeQnA.embeddings(query)['data'][0]['embedding']

//retreive results
def searchResults = GenerativeQnA.embeddingSearch(embedding, NUMBER_OF_SEARCH_RESULTS)

// retrieve and format relative content
def contents = searchResults['value'].collect { hit ->"Content: ${hit.content.replaceAll("\\s+", " ")}\nSource: ${hit.title}\n" }

// the completion prompt
def prompt = "${contents.join('\n')}\n\n" +
                "You are a digital assistant. You are helping a customer with a problem. " + "Please reply to the customer in a way that solves their problem.\n\n" + "Question:" + ${query} + "\nAnswer:"

// generate the answer
def completion = GenerativeQnA.chat(prompt, TEMPERATURE, MAX_TOKENS)
repsonse = GenerativeQnA.completion['choices'][0]['message']['content']