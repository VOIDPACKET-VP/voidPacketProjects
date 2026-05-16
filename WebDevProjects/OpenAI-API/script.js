import { Groq } from 'groq-sdk'
import DOMPurify from "dompurify"

const translationForm = document.querySelector('.form-section')
const formSection = document.getElementById('form-section-id')
const textInput = document.getElementById('text-to-translate')
const list = document.querySelector('.language-list')
const answerArea = document.getElementById('answer')
const translatedAnswer = document.getElementById('translated-answer')
const restartBtn = document.getElementById('restart-btn')


const groq = new Groq({
    apiKey: API_KEY,
    baseURL: API_URL,
    dangerouslyAllowBrowser: true
})

const messages = [
    {
        role: "system", 
        content: `You translate exactly what the user wants.
    No introductions, no conclusions, just translation.
    Make sure you're translation matches the sophistcation level of the user's text: if he used high level language words, your translation must also be high level
    `
    },
]

let selectedLang = 'spanish'
list.addEventListener('click', e => {
    const lisItem = e.target.closest('li')
    if (lisItem) {
        selectedLang = lisItem.dataset.lang
    }
})

translationForm.addEventListener('submit', handleRequest)

async function handleRequest(e) {
    
    e.preventDefault()
    if (!textInput.value) return

    const userPrompt = `Translate the following in ${selectedLang}` + textInput.value
    messages.push({
        role: "user",
        content: userPrompt
    })

    try {
        const response = await groq.chat.completions.create({
            model: API_MODEL,
            messages: messages,
            stream: true
        })
        
        formSection.classList.toggle('hidden')
        answerArea.classList.toggle('hidden')

        for await (const chunk of response) {
	        const newAnswer = chunk.choices[0]?.delta?.content || ""
            translatedAnswer.textContent += newAnswer
        }

    } catch (err) {
        console.log(err)
        answerArea.innerHTML = `<p class="language-header">Sorry, I can't access what I need right now.<br>Please try again in a bit.</p>`   
    }
}

restartBtn.addEventListener('click', () => {
    textInput.value = ''
    answerArea.classList.toggle('hidden')
    translatedAnswer.textContent = ''
    formSection.classList.toggle('hidden')
    messages.length = 1
})