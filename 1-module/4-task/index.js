/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  if (str.toLowerCase().includes("1xbet") || str.toLowerCase().includes("xxx")) return true;
            return false;
}
