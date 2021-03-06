module.exports = function(context) {
  function checkAuthenticityTokenUsage(node, str) {
    if (str.includes('authenticity_token')) {
      context.report(node, "Form CSRF tokens (authenticity tokens) should not be created in JavaScript and their values should not be used directly for XHR requests.")
    }
  }

  return {
    "Literal": function(node) {
      if (typeof node.value === 'string') {
        checkAuthenticityTokenUsage(node, node.value)
      }
    }
  }
}

module.exports.schema = []
