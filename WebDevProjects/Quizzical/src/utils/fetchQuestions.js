
export async function fetchQuestions() {
    try {
        const response = await fetch("https://opentdb.com/api.php?amount=5&category=18&difficulty=medium&type=multiple")
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json()

        if (data.response_code === 5) {
            throw new Error("Rate limit hit! Open Trivia DB only allows 1 request every 5 seconds. Please wait and refresh.");
        }
        if (data.response_code !== 0) {
            throw new Error(`API returned an error code: ${data.response_code}`);
        }

        return data
    } catch (err) {
        console.log("Fetch failed:", err)
        throw new Error(`Error while fetching: ${err.message}`)
    }
}