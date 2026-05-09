import { sendResponse } from "./sendResponse.js"
import { logUserPurchase } from "./logUserPurchase.js"
export async function parseFORMBody(req, res, livePrice) {
    let body = ''
    for await (const chunk of req) {
        body += chunk
    }  

    try {
        const params = new URLSearchParams(body)
        const amount = params.get('amount') || 0
        const ounces = (amount / livePrice).toFixed(4)

        await logUserPurchase(amount, ounces)

        const successHTML = `
        <!DOCTYPE html>
        <html>
        <head><link rel="stylesheet" href="index.css"></head>
        <body>
            <dialog class="outputs" open>
                <h2>Summary</h2>
                <p id="investment-summary">
                    You just bought ${ounces} ounces (ozt) for £${amount}.
                </p>
                <a href="/" style="text-decoration: none;">
                    <button type="button" autofocus>OK</button>
                </a>
            </dialog>
        </body>
        </html>
    `
        sendResponse(res, 200, 'text/html', successHTML)
    }catch(err) {
        sendResponse(res, 500, 'text/html', `<html><h1>Server Error: ${err.code}</h1></html>`)
    }
}