export interface Article {
  id: number,
  title: string,
  description?: string,
  summary: string,
  publisher: string,
  timestamp: number,
  image?: string
}
