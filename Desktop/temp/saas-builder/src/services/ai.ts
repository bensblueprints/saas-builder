import { HfInference } from '@huggingface/inference';

// Initialize the Hugging Face client with API key from environment variable
const hf = new HfInference(process.env.VITE_HUGGINGFACE_API_KEY);

interface TechStackResult {
  score: number;
  label: string;
}

// Models we'll use
const MODELS = {
  // For idea validation and suggestions
  ideaAnalysis: 'gpt2',  // You can replace with a more suitable model
  // For tech stack recommendations
  techStackAnalysis: 'facebook/bart-large-mnli',
  // For sentiment analysis
  sentimentAnalysis: 'distilbert-base-uncased-finetuned-sst-2-english'
};

export interface AIAnalysisResult {
  score: number;
  suggestions: string[];
  confidence: number;
}

export const analyzeIdea = async (idea: string): Promise<AIAnalysisResult> => {
  try {
    const result = await hf.textGeneration({
      model: MODELS.ideaAnalysis,
      inputs: `Analyze this SaaS idea: ${idea}`,
      parameters: {
        max_length: 100,
        temperature: 0.7,
      }
    });

    // Process the result to extract meaningful insights
    // This is a simplified version - you'd want to make this more sophisticated
    return {
      score: 0.8, // You'd calculate this based on the analysis
      suggestions: [result.generated_text],
      confidence: 0.75
    };
  } catch (error) {
    console.error('Error analyzing idea:', error);
    throw error;
  }
};

export const recommendTechStack = async (requirements: string): Promise<string[]> => {
  try {
    const result = await hf.zeroShotClassification({
      model: MODELS.techStackAnalysis,
      inputs: requirements,
      parameters: {
        candidate_labels: [
          "React", "Vue", "Angular",
          "Node.js", "Python/Django", "Ruby on Rails",
          "PostgreSQL", "MongoDB", "MySQL",
          "AWS", "Google Cloud", "Azure"
        ]
      }
    });

    // Return top 3 recommendations based on scores
    const recommendations: TechStackResult[] = (result as any).scores.map((score: number, index: number) => ({
      score,
      label: (result as any).labels[index]
    }));

    return recommendations
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map(item => item.label);
  } catch (error) {
    console.error('Error recommending tech stack:', error);
    throw error;
  }
};

export const analyzeSentiment = async (text: string): Promise<number> => {
  try {
    const result = await hf.textClassification({
      model: MODELS.sentimentAnalysis,
      inputs: text,
    });

    // Convert sentiment to a score between 0 and 1
    return result[0].score;
  } catch (error) {
    console.error('Error analyzing sentiment:', error);
    throw error;
  }
}; 