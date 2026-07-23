import { getModel } from "../config/llmModels"

export const chatAgent = async (params) => {
    const llm = await getModel("chat");
    const prompt = "You are DopeAI and a very intelligent AI assistances."
    const response = await llm.invoke([
        {
            "role":"system",
            "content":prompt
        },
        {
            "role":"human",
            "content":state.prompt
        }
    ])
    return{
        ...state,
        aiResponse:response.content
    }
}
