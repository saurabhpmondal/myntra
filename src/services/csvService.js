/**
 * =====================================================
 * Project Phoenix
 * Product : Myntra Analytics
 * Module  : CSV Service
 * Version : V3.0
 * =====================================================
 */

export async function loadCSV(url) {

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Unable to fetch CSV : ${url}`);
        }

        const text = await response.text();

        return parseCSV(text);

    } catch (error) {

        console.error("CSV Load Error:", error);

        return [];

    }

}

function parseCSV(csv) {

    const lines = csv.trim().split("\n");

    if (lines.length === 0) return [];

    const headers = splitCSVLine(lines[0]).map(h => h.trim());

    const data = [];

    for (let i = 1; i < lines.length; i++) {

        if (!lines[i].trim()) continue;

        const values = splitCSVLine(lines[i]);

        const row = {};

        headers.forEach((header, index) => {

            row[header] = values[index] ? values[index].trim() : "";

        });

        data.push(row);

    }

    return data;

}

function splitCSVLine(line) {

    const result = [];

    let current = "";

    let insideQuotes = false;

    for (const char of line) {

        if (char === '"') {

            insideQuotes = !insideQuotes;

            continue;

        }

        if (char === "," && !insideQuotes) {

            result.push(current);

            current = "";

        } else {

            current += char;

        }

    }

    result.push(current);

    return result;

}