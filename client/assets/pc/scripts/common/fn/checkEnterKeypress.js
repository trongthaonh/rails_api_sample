/**
 * checkEnterKeyPress Dunction Description v1.0.0
 * @fileoverview エンターキーを押した際のブラウザ毎のキーイベントを処理する関数。
 *    対応ブラウザはモダンブラウザ（IE8以上、Androidブラウザは不明）
 * @param {Object} e - jQueryイベントオブジェクト
 * @return {boolean} キーイベントがエンターキーだった場合はtrue。それ以外はfalse
 */

export default function checkEnterKeyPress(e) {
  let isConverting = false;
  if (e.type === 'keydown') {
    if (e.which === 229) {
      //* 日本語入力時時 */
      isConverting = true;
    }
  }
  if (e.which === 13) {
    if (isConverting) {
      //* 日本語変換確定時 */
      isConverting = false;
    } else if (e.type !== 'keyup') {
      // Enterキー押下時
      return true;
    }
  }
  return false;
}
