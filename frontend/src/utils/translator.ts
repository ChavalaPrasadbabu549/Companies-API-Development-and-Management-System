
export const translateText = async (text: string, targetLang: string): Promise<string> => {
  if (!text || targetLang === "en") return text;

  const isSkippable =
    text.match(/^https?:\/\//) || // URLs like https://...
    text.match(/^www\./) ||       // URLs like www.something.com
    text.match(/^[\w._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/) || // Emails
    text.match(/^\d+$/) ||        // Pure numbers
    text.length <= 1;             // Single letters or symbols

  if (isSkippable) return text;


  console.log(text)
  try {
    const response = await fetch(
      `https://lingva.ml/api/v1/en/${targetLang}/${encodeURIComponent(text)}`
    );
    if (!response.ok) return text;

    const data = await response.json();
    return data.translation ?? text;
  } catch (error) {
    console.error("Translation failed:", error);
    return text;
  }
};

// export const translateText = async (text: string, targetLang: string): Promise<string> => {
//   // Skip translation for certain cases
//   if (!text || targetLang === "en") return text;

//   const isSkippable =
//     text.match(/^https?:\/\//) || // URLs like https://...
//     text.match(/^www\./) ||       // URLs like www.something.com
//     text.match(/^[\w._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/) || // Emails
//     text.match(/^\d+$/) ||        // Pure numbers
//     text.length <= 1;             // Single letters or symbols

//   if (isSkippable) return text;

//   try {
//     const response = await fetch("https://libretranslate.com/translate", {
//       method: "POST",
//       body: JSON.stringify({
//         q: text,
//         source: "auto",
//         target: targetLang,
//         format: "text",
//         alternatives: 3,
//         api_key: "" // Add your API key here if needed
//       }),
//       headers: { "Content-Type": "application/json" }
//     });

//     if (!response.ok) {
//       console.error("Translation request failed:", response.status);
//       return text;
//     }

//     const data = await response.json();

//     // Return the translation or fallback to original text
//     return data.translatedText || text;
//   } catch (error) {
//     console.error("Translation failed:", error);
//     return text;
//   }
// };
