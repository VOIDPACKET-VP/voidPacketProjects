import fs from 'node:fs/promises'
import path from 'node:path'

export async function logUserPurchase(amount, ounces) {
    // what to log
    const logPath = path.join(process.cwd(), 'purchases.jsonl') // as json lines
    const purchaseData = {
        timeStamp: new Date().toISOString(),
        amount: parseFloat(amount),
        ounces: parseFloat(ounces),
        currency: 'GBP'
    }

    // add it to the file
    try {
        const logEntry = JSON.stringify(purchaseData) + '\n'
        await fs.appendFile(logPath, logEntry, 'utf-8')
    } catch(err){   
        console.log('Failed to log purchase: ', err)
    }

}