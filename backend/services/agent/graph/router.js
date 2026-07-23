import { getModel } from "../config/llmModels"

export const router = async (state) => {
    const llm = await getModel("router");
    const prompt = `You are an agent router.
    Available agents:
    - chat
    - search 
    - coding
    - pdf 
    - ppt 
    -image
    
    Rules:
    
    chat:
    General conversation,
    explanations,
    learning,
    questions

    search:
    Current EventSource,
    latest news,
    news,
    recent developments,
    internet lookup
    
    coding:
    Generate code,
    debug code,
    buildprojects,
    archietecture,
    API design
    
    pdf:
    Questions about generate PDFs or document context
    
    ppt:
    Questions about generate ppts or ppt context
    
    image:
    image generation,
    create image
    
    Return only one word:
    
    chat
    search
    ppt
    pdf
    image
    coding
    
    User Query:
    ${state.prompt}
    `
    const response = await llm.invoke(prompt);
    console.log(response);
    return {
        ...state,
        agent:response.content.trim().toLowerCase()
    }

}