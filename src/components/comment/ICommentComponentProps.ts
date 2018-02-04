import { Comment } from 'core/domain/comments'
import { Profile } from 'core/domain/users'
export interface ICommentComponentProps {

  /**
   * Comment
   *
   * @type {Comment}
   * @memberof ICommentComponentProps
   */
  comment: Comment

  /**
   * Open profile editor
   *
   * @type {Function}
   * @memberof ICommentComponentProps
   */
  openEditor?: Function

  /**
   * Close comment editor
   *
   * @type {Function}
   * @memberof ICommentComponentProps
   */
  closeEditor?: () => any

  /**
   * Current user is comment owner {true} or not {false}
   *
   * @type {boolean}
   * @memberof ICommentComponentProps
   */
  isCommentOwner?: boolean

  /**
   * Current user is post owner {true} or not {false}
   *
   * @type {boolean}
   * @memberof ICommentComponentProps
   */
  isPostOwner: boolean

  /**
   * Update comment
   *
   * @memberof ICommentComponentProps
   */
  update?: (comment: Comment) => any

  /**
   * Delete comment
   *
   * @memberof ICommentComponentProps
   */
  delete?: (id?: string | null, postId?: string) => any

  /**
   * Get user profile
   *
   * @memberof ICommentComponentProps
   */
  getUserInfo?: () => void

  /**
   * User profile
   *
   * @type {{[userId: string]: Profile}}
   * @memberof ICommentComponentProps
   */
  info?: {[userId: string]: Profile}

  /**
   * User full name
   *
   * @type {string}
   * @memberof ICommentComponentProps
   */
  fullName?: string

  /**
   * User avatar address
   *
   * @type {string}
   * @memberof Comment
   */
  avatar?: string

  /**
   * Writing comment on the post is disabled {true} or not false
   *
   * @type {boolean}
   * @memberof ICommentComponentProps
   */
  disableComments?: boolean

  /**
   * Styles
   */
  classes?: any

}
