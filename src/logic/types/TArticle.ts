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

export type TArticleJoined = TArticle & { 
  article_title : string,
  parent_title : string,
  parent_id : number,
  grandparent_title : string,
  grandparent_id : number,
}