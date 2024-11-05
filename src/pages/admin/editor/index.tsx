import useEditor from "./useEditor";

import styles from "./editor.module.css"
import AdminLayout from "../admin-layout"

import {
  TITLE_LABEL,
  TITLE_NAME,
  TITLE_TITLE,
  TYPE_LABEL,
  TYPE_NAME,
  TYPE_TITLE,
  IS_ARTICLE_LABEL,
  IS_ARTICLE_NAME,
  IS_ARTICLE_TITLE,
  IMAGE_COVER_LABEL,
  IMAGE_COVER_NAME,
  IMAGE_COVER_TITLE,
  TOTAL_SCORE_LABEL,
  TOTAL_SCORE_NAME,
  TOTAL_SCORE_TITLE,
  DESCRIPTION_LABEL,
  DESCRIPTION_NAME,
  DESCRIPTION_TITLE,
  PARENT_ID_LABEL,
  PARENT_ID_NAME,
  PARENT_ID_TITLE,
  PARENT_TYPE_LABEL,
  PARENT_TYPE_NAME,
  PARENT_TYPE_TITLE,
  PREVIOUS_ARTICLE_ID_LABEL,
  PREVIOUS_ARTICLE_ID_NAME,
  PREVIOUS_ARTICLE_ID_TITLE,
  CONTENT_LABEL,
  CONTENT_NAME,
  CONTENT_TITLE,
  SAVE_BUTTON
} from "./editor-text"

export default function Editor() {
  const {
    isSaving,
    isArticle,
    type,

    setTitle,
    setType,
    setIsArticle,
    setImageCover,
    setTotalScore,
    setDescription,
    setParent,
    setParentType,
    setPreviousArticle,
    setContent
  } = useEditor();
  return (
    <AdminLayout>
      <h2 className={ styles[`editor__title`] }>Editor</h2>
      <form action="" className={ styles[`editor__form`] }>
        <section className={ styles[`editor__this-article`] }>
          <h4>This Article</h4>

          <section className={ styles[`editor__input-container`] }>
            <label htmlFor={ TITLE_NAME }>{ TITLE_LABEL }</label>
            <input 
              name={ TITLE_NAME } 
              type="text"
              title={ TITLE_TITLE }
              required
              onChange={ setTitle }
            />
          </section>

          <section className={ styles[`editor__input-container`] }>
            <label htmlFor={ TYPE_NAME }>{ TYPE_LABEL }</label>
            <select 
              name={ TYPE_NAME } 
              title={ TYPE_TITLE } 
              required
              onChange={ setType }
              >
              <option value="1">Subject</option>
              <option value="2">Topic</option>
              <option value="3">Subtopic</option>
            </select>
          </section>
          
          { /* TODO: When the checkbox is checked to be off, is not being reflected */ }  
          <section className={ styles[`editor__input-container`] }>
            <label htmlFor={ IS_ARTICLE_NAME }>{ IS_ARTICLE_LABEL }</label>
            <input 
              name={ IS_ARTICLE_NAME } 
              type="checkbox" 
              title={ IS_ARTICLE_TITLE }
              onChange={ setIsArticle }
            />
          </section>

          <section className={ styles[`editor__input-container`] }>
            <label htmlFor={ IMAGE_COVER_NAME }>{ IMAGE_COVER_LABEL }</label>
            <input 
              name={ IMAGE_COVER_NAME } 
              type="text" 
              title={ IMAGE_COVER_TITLE }
              onChange={ setImageCover }
            />
          </section>

          <section className={ styles[`editor__input-container`] }>
            <label htmlFor={ TOTAL_SCORE_NAME }>{ TOTAL_SCORE_LABEL }</label>
            <input 
              name={ TOTAL_SCORE_NAME } 
              type="number" 
              title={ TOTAL_SCORE_TITLE }
              required
              onChange={ setTotalScore }
            />
          </section>

          <section className={ `${ styles[`editor__content`] } ${ styles[`.editor__input-container--textarea`]}` }>
            <label htmlFor={ DESCRIPTION_NAME }>{ DESCRIPTION_LABEL }</label>
            <textarea 
              name={ DESCRIPTION_NAME} 
              title={ DESCRIPTION_TITLE }
              required
              onChange={ setDescription }
            ></textarea>
          </section>
        </section>

        <section className={ styles[`editor__related-articles`] }>
          <h4>Related Articles</h4>

          {
            type > 1 && <>
              <section className={ styles[`editor__input-container`] }>
                <label htmlFor={ PARENT_ID_NAME }>{ PARENT_ID_LABEL }</label>
                <input 
                  name={ PARENT_ID_NAME } 
                  type="number" 
                  title={ PARENT_ID_TITLE } 
                  required
                  onChange={ setParent }
                />
              </section>
              
              <section className={ styles[`editor__input-container`] }>
                <label htmlFor={ PARENT_TYPE_NAME }>{ PARENT_TYPE_LABEL }</label>
                <select 
                  name={ PARENT_TYPE_NAME } 
                  title={ PARENT_TYPE_TITLE }
                  required
                  onChange={ setParentType }
                  >
                  <option value="1">Subject</option>
                  <option value="2">Topic</option>
                  <option value="3">Subtopic</option>
                </select>
              </section>
            </>
          }

          <section className={ styles[`editor__input-container`] }>
            <label htmlFor={ PREVIOUS_ARTICLE_ID_NAME }>{ PREVIOUS_ARTICLE_ID_LABEL }</label>
            <input 
              type="number"
              name={ PREVIOUS_ARTICLE_ID_NAME }
              title={ PREVIOUS_ARTICLE_ID_TITLE }
              onChange={ setPreviousArticle }
            />
          </section>

        </section>

        {
          isArticle && <>
            <section className={ styles[`editor__content`] }>
              <h4>Content</h4>
              <section className={ `${ styles[`editor__content`] } ${ styles[`.editor__input-container--textarea`]}`}>
                <label htmlFor={ CONTENT_NAME }>{ CONTENT_LABEL}</label>
                <textarea 
                  name={ CONTENT_NAME } 
                  title={ CONTENT_TITLE } 
                  required
                  onChange={ setContent }
                ></textarea>
              </section>
            </section>
          </>
        }

        <section>
          <button>{ SAVE_BUTTON }</button>
        </section>
      </form>
    </AdminLayout>
  )
}
