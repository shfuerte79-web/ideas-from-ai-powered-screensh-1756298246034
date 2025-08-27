import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: AI-Powered Screenshot to Text',
  description: '[
  {
    "title": "Visual Data Librarian",
    "one_liner": "Transform screenshots into searchable databases instantly.",
    "why_now": "Businesses and individuals require quick access to information, particularly as remote work and digital interactions increase.",
    "novel_mechanism": "Utilizes advanced vector embeddings to create contextual relationships between screenshots.",
    "ai_stack": [
      "Claude/GPT",
      "RAG",
      "Vision",
      "Embeddings"
    ],
    "edge_use_cases": [
      "Research teams converting screenshots into searchable knowledge bases.",
      "Social media managers organizing feedback from user-generated content."
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Screenshot upload",
        "Text extraction",
        "Searchable interface"
      ],
      "tools": [
        "React",
        "Firebase",
        "OpenAI API"
      ],
      "data_bootstrap": [
        "collect public datasets of labeled screenshots",
        "generate synthetic data from LLM"
      ],
      "risk": [
        "technical challenges of accurate OCR",
        "user data privacy concerns"
      ],
      "mitigation": [
        "research and implement best-in-class OCR libraries",
        "ensure all data handling complies with regulations"
      ]
    },
    "go_to_market": {
      "hooks": [
        "showing real vs. extracted information",
        "before and after search functionalities"
      ],
      "channels": [
        "Twitter",
        "LinkedIn",
        "tech forums"
      ],
      "pricing": {
        "free": "limited extractions per month",
        "pro": "$5/month for unlimited access",
        "business": "$50/month for team licenses with additional features"
      }
    },
    "moat": [
      "high-quality data synthesis",
      "integrated search functionalities",
      "potential partnerships with educational institutions"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 7,
      "revenue_potential": 6,
      "defensibility": 8
    },
    "total_score": 29,
    "reasoning": "While traditional OCR solutions focus on single tasks, our approach enhances usability by combining search capabilities and context understanding, making it more comprehensive and appealing."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}