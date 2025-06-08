import {
    GoogleGenAI,
  } from '@google/genai';
  
  async function geminiResponse(text) {
    const ai = new GoogleGenAI({
        apiKey:'AIzaSyCXxtmvdCqShm15jNwa0_Ot2iBLOpp-SD0'
    });
    const config = {
      responseMimeType: 'text/plain',
    };
    const model = 'gemini-2.5-pro-preview-03-25';
    const contents = [
      {
        role: 'user',
        parts: [
          {
            text
          },
        ],
      },
    ];
  
    const response = await ai.models.generateContentStream({
      model,
      config,
      contents,
    });
    let data =''
    for await (const chunk of response) {
      // console.log(chunk.text,'Chunk Of Text');
      data = data + chunk.text
    }
    // console.log(data,'Data')
    return data
  }
  
//   geminiResponse();
export default geminiResponse;