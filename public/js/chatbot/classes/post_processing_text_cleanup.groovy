SimpleOpParser.parseParams(_)
def outputTextSegmentIndexes = []
def outputTextSegments = _.getOutputText().split(/\|\|/)
if (outputTextSegments.size() > 1) {
    def startIndex = 0
    def cleanedOutputText = ""

    outputTextSegments.each { textSegment ->
        def endIndex = startIndex + textSegment.size()
        if (textSegment) {
                outputTextSegmentIndexes << [startIndex, endIndex]
        }
        startIndex = endIndex
        cleanedOutputText += textSegment
    }
    _.setOutputText(cleanedOutputText)
}

if (outputTextSegmentIndexes) {
    _.putOutputParameter("outputTextSegmentIndexes", "${outputTextSegmentIndexes}")
}