export type TArticle = {
  ID_Article: number,
  title: string,
  img_cover: string,
  type: number,//'subject' | 'topic' | 'subtopic',
  has_content?: boolean
  ID_Prev_Article?: number,
  score: number,
  ID_Parent?: number,
  parent_type?: 'subject' | 'topic' | 'subtopic',
  description?: string
}